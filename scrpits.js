// ======= Get Form Elements =======
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");

// ======= Email Regex =======
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ======= Submit Event Listener =======
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // STOP actual browser submission

  clearErrors();
  successMessage.textContent = ""; // Clear old message

  let isValid = true;

  // ======= Name Validation =======
  const nameValue = nameInput.value.trim();
  if (nameValue === "") {
    setError(nameInput, nameError, "Name is required.");
    isValid = false;
  } else if (nameValue.length < 3) {
    setError(nameInput, nameError, "Name must be at least 3 characters.");
    isValid = false;
  }

  // ======= Email Validation =======
  const emailValue = emailInput.value.trim();
  if (emailValue === "") {
    setError(emailInput, emailError, "Email is required.");
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    setError(emailInput, emailError, "Please enter a valid email address.");
    isValid = false;
  }

  // ======= Message Validation =======
  const messageValue = messageInput.value.trim();
  if (messageValue === "") {
    setError(messageInput, messageError, "Message is required.");
    isValid = false;
  } else if (messageValue.length < 10) {
    setError(
      messageInput,
      messageError,
      "Message must be at least 10 characters."
    );
    isValid = false;
  }

  // ======= If All Valid — Show Success Message =======
  if (isValid) {
    successMessage.textContent =
      "✅ Your message has been submitted successfully!";
    contactForm.reset();
  }
});

// ======= Reset Button Clears Everything =======
contactForm.addEventListener("reset", function () {
  clearErrors();
  successMessage.textContent = "";
});

// ======= Helper: Set Error =======
function setError(inputElement, errorElement, message) {
  inputElement.classList.add("error");
  errorElement.textContent = message;
}

// ======= Helper: Clear All Errors =======
function clearErrors() {
  nameInput.classList.remove("error");
  emailInput.classList.remove("error");
  messageInput.classList.remove("error");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
}

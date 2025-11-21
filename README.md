# Task 6 – Contact Form with JavaScript Validation

This project is a simple, modern **Contact Form** built using **HTML, CSS, and JavaScript** with client-side validation for user inputs.

## 🎯 Objective

- Build a contact form with:
  - Name
  - Email
  - Message
- Validate the inputs on the **client side** using JavaScript.
- Show **error messages** below the inputs if the form is invalid.
- Show a **success message** when the form is valid.
- No real message sending – just front-end validation and feedback.

---

## 🧩 Features

- ✅ Centered, attractive contact form UI
- ✅ Validation rules:
  - **Name**: required, minimum 3 characters
  - **Email**: required, must be in valid email format (checked using regex)
  - **Message**: required, minimum 10 characters
- ✅ Inline error messages under each field
- ✅ Red border + light red background for invalid fields
- ✅ Green success message when form is submitted with valid data
- ✅ **Reset** button clears the form and all messages

---

## 🛠️ Technologies Used

- **HTML5** – structure of the form
- **CSS3** – styling, layout, gradients, and button design
- **Vanilla JavaScript (ES6)** – form validation, event handling, and DOM manipulation
- **Regex** – used for email format validation

---

## 📂 Files in This Project

- `index.html` – main page with the contact form
- `style.css` – styles for layout, colors, and form design
- `script.js` – JavaScript code for client-side validation
- `README.md` – documentation of the project

---

## 🚀 How to Run the Project

1. **Download or clone** this repository.
2. Open the project folder in **VS Code** (or any code editor).
3. Open `index.html` in a browser:
   - Option 1: Double-click `index.html`
   - Option 2 (recommended): Use **Live Server** extension in VS Code  
     - Right-click on `index.html` → **Open with Live Server**
4. Test the form:
   - Try submitting with **empty fields** → you should see error messages
   - Try an **invalid email** (e.g., `abc@xyz` or `abc.com`) → email error is shown
   - Try a very short name or message → length validation errors
   - Enter valid values in all fields → success message is shown on top

---

## 📚 Key Concepts Practised

- Form elements (`<form>`, `<input>`, `<textarea>`, `<button>`)
- `addEventListener('submit', ...)` and `event.preventDefault()`
- `addEventListener('reset', ...)`
- Using **Regex** for email validation:
  ```js
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

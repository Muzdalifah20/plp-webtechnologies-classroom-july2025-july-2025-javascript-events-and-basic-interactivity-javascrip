// Event handling: Show message when button clicked
const clickButton = document.getElementById("clickButton");
const message = document.getElementById("message");

clickButton.addEventListener("click", () => {
  message.textContent = "Button was clicked!";
});

// Interactive feature #1: Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Interactive feature #2: Simple counter example
let counter = 0;
clickButton.addEventListener("click", () => {
  counter++;
  message.textContent = `Button clicked ${counter} times.`;
});

// Form validation
const form = document.getElementById("myForm");
const formError = document.getElementById("formError");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  formError.textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Simple validations
  if (name.length < 2) {
    formError.textContent = "Name must be at least 2 characters.";
    return;
  }
  if (!email.includes("@")) {
    formError.textContent = "Please enter a valid email.";
    return;
  }
  if (password.length < 6) {
    formError.textContent = "Password must be at least 6 characters.";
    return;
  }
  formError.style.color = "green";
  formError.textContent = "Form submitted successfully!";
});

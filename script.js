// Select DOM elements
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitButton = document.getElementById("submit");
const existingButton = document.getElementById("existing");
const loginForm = document.getElementById("loginForm");

// Check for stored credentials on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingButton.style.display = "block";
  }
});

// Handle form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (checkbox.checked) {
    // Save credentials if "Remember me" is checked
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // Remove credentials if "Remember me" is unchecked
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert(`Logged in as ${username}`);

  // Show the "Login as existing user" button if credentials are saved
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existingButton.style.display = "block";
  }
});

// Handle existing user login
existingButton.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  alert(`Logged in as ${savedUsername}`);
});

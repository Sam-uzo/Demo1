// DOM Elements; cache frequently used elements
const tabs = document.querySelectorAll(".tab-btn");
const forms = document.querySelectorAll(".auth-form");
const switchLinks = document.querySelectorAll(".switch-link, .forgot-link");
const passwordToggles = document.querySelectorAll(".toggle-password");
const otpInputs = document.querySelectorAll(".otp-container input");
const retryOtp = document.getElementById("retry-otp");
const goToDashboard = document.getElementById("go-to-dashboard");

// const loginButton = document.querySelector(".primary-btn");
// loginButton.addEventListener("click", () => {
//   window.location.href = "account_management1.html";
// })

// Tab Switching
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // Show corresponding form
    const tabId = tab.dataset.tab;
    switchPage(tabId);
  });
});

// Switch between forms/pages
switchLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetPage = link.dataset.target;
    switchPage(targetPage);

    // Update active tab if switching between signup/login
    if (targetPage === "signup" || targetPage === "login") {
      tabs.forEach((tab) => tab.classList.remove("active"));
      document
        .querySelector(`[data-tab="${targetPage}"]`)
        .classList.add("active");
    }
  });
});

// Toggle password visibility
passwordToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const input = toggle.previousElementSibling;
    const type =
      input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
    toggle.classList.toggle("fa-eye");
    toggle.classList.toggle("fa-eye-slash");
  });
});

// OTP Input auto-focus
otpInputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    // Move to next input if current is filled
    if (e.target.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }

    // Auto submit if all inputs are filled
    const allFilled = Array.from(otpInputs).every(
      (inp) => inp.value.length === 1
    );
    if (allFilled) {
      document.getElementById("otp-form").dispatchEvent(new Event("submit"));
    }
  });

  // Allow backspace to go to previous input
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});

// Retry OTP
retryOtp?.addEventListener("click", (e) => {
  e.preventDefault();
  alert("OTP has been resent to your email!");
});

// Go to Dashboard
goToDashboard?.addEventListener("click", () => {
  // In production, this would redirect to dashboard
  window.location.href = "/dashboard";
  // For demo, show alert
  alert("Redirecting to dashboard...");
});

// Form Submissions
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  // In production: Send signup data to server
  // For demo: Show success screen
  switchPage("success");
});

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  // In production: Send login data to server
  // For demo: Simulate login
  const email = this.querySelector('input[type="email"]').value;
  const password = this.querySelector('input[type="password"]').value;

  // Simple validation
  if (email && password) {
    alert(`Logging in with:\nEmail: ${email}\nPassword: ${password}`);
    // Redirect in production:
    window.location.href = 'account_management1.html';
  }
});

document.getElementById("forgot-form").addEventListener("submit", function (e) {
  e.preventDefault();
  // In production: Send password reset request
  alert("Password reset link sent to your email!");
  switchPage("otp");
});

document.getElementById("otp-form").addEventListener("submit", function (e) {
  e.preventDefault();
  // In production: Verify OTP with server
  alert("OTP verified! You can now reset your password.");
  // Redirect to password reset page
});

// Page switching function
function switchPage(page) {
  // Hide all forms
  forms.forEach((form) => form.classList.remove("active"));

  // Show target form
  const targetForm = document.querySelector(`[data-page="${page}"]`);
  if (targetForm) {
    targetForm.classList.add("active");

    // Scroll to top of form
    targetForm.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Google Sign In (demo)
document.querySelector(".google-btn")?.addEventListener("click", () => {
  alert("This would redirect to Google OAuth in production");
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Focus first input in active form
  const activeForm = document.querySelector(".auth-form.active");
  const firstInput = activeForm?.querySelector("input, select");
  firstInput?.focus();

  console.log("Authentication system ready!");
});

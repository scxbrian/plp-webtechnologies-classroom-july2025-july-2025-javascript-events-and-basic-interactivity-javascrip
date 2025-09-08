// -----------------------------
// Part 1: Event Handling
// -----------------------------
document.getElementById("messageBtn").addEventListener("click", function () {
  document.getElementById("messageArea").textContent =
    "Hello! You clicked the button 🎉";
});

// -----------------------------
// Part 2: Interactive Elements
// -----------------------------

// Light/Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("increment").addEventListener("click", function () {
  count++;
  counterValue.textContent = count;
});

document.getElementById("decrement").addEventListener("click", function () {
  count--;
  counterValue.textContent = count;
});

// Collapsible FAQ
const faqToggle = document.querySelector(".faq-toggle");
const faqContent = document.querySelector(".faq-content");

faqToggle.addEventListener("click", function () {
  faqContent.style.display =
    faqContent.style.display === "block" ? "none" : "block";
});

// -----------------------------
// Part 3: Form Validation
// -----------------------------
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  let feedback = "";

  // Name validation
  if (name.length < 2) {
    feedback += "❌ Name must be at least 2 characters long.<br>";
  }

  // Email validation with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    feedback += "❌ Invalid email format.<br>";
  }

  // Password validation
  if (password.length < 6) {
    feedback += "❌ Password must be at least 6 characters.<br>";
  }

  // Feedback
  const formFeedback = document.getElementById("formFeedback");
  if (feedback) {
    formFeedback.innerHTML = feedback;
    formFeedback.style.color = "red";
  } else {
    formFeedback.textContent = "✅ Form submitted successfully!";
    formFeedback.style.color = "green";
  }
});

// Smooth Scroll for Navbar & "Apply Now" Button
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
  formMessage.textContent = "";

  let hasError = false;

  if (name.value.trim() === "") {
    name.nextElementSibling.textContent = "Name is required.";
    hasError = true;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  if (email.value.trim() === "") {
    email.nextElementSibling.textContent = "Email is required.";
    hasError = true;
  } else if (!emailPattern.test(email.value)) {
    email.nextElementSibling.textContent = "Enter a valid email address.";
    hasError = true;
  }

  if (message.value.trim() === "") {
    message.nextElementSibling.textContent = "Message is required.";
    hasError = true;
  }

  if (hasError) {
    formMessage.textContent = "❌ Please fix the highlighted errors.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "✅ Your message has been sent successfully!";
    formMessage.style.color = "green";
    name.value = "";
    email.value = "";
    message.value = "";
  }
});

// Scroll-To-Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

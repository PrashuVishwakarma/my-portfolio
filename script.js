// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Mobile menu toggle
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Contact form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Simple validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Simulate form submission
  alert("Thank you for your message! I'll get back to you soon.");
  this.reset();
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.style.background = "rgba(255, 255, 255, 0.98)";
    nav.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)";
  } else {
    nav.style.background = "rgba(255, 255, 255, 0.95)";
    nav.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  }
});

// Add fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Dynamic hero image (placeholder functionality)
const heroImg = document.getElementById("heroImg");
const images = ["image/profilimg.jpg",
    "image/profil2.jpg"
];

let currentImageIndex = 0;
setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  heroImg.src = images[currentImageIndex];
}, 5000);

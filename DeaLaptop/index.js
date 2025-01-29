// Selectors
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Toggle Navbar on Menu Icon Click
menuIcon.addEventListener("click", () => {
 
  navbar.classList.toggle("active"); // Show/Hide navbar
});

// Close Navbar on Scroll
window.onscroll = () => {
  navbar.classList.remove("active");
};

// ScrollReveal Animation with Fallback
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    origin: "top",
    distance: "40px",
    duration: 2000,
    reset: true,
  });

  sr.reveal(
    ".home-text, .home-img, .about-img, .about-text, .box, .services-cards, .contact-text",
    { interval: 200 }
  );
} 

// Accessibility Enhancement: Close Navbar on Link Click (for smaller screens)
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

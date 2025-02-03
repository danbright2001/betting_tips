document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const navToggle = document.querySelector(".navToggle");
  const allLinks = document.querySelectorAll("a"); // Select only navbar links

  // Function to toggle navbar
  function toggleNavbar() {
    if (navbar.classList.contains("hidden")) {
      navbar.classList.remove("hidden");
      navToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
      navbar.classList.add("hidden");
      navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  }

  // Toggle navbar when button is clicked
  navToggle.addEventListener("click", toggleNavbar);

  // Close navbar when any link is clicked
  allLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.add("hidden");
      navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

  // Close navbar when scrolling
  window.addEventListener("scroll", () => {
    if (!navbar.classList.contains("hidden")) {
      navbar.classList.add("hidden");
      navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
});




// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior (page reload)
  event.preventDefault();

  // Reset the form after submission (this clears all fields)
  form.reset();
});


// Scroll hide/show navbar functionality
let lastScrollTop = 0; // Store last scroll position

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down, hide the navbar by reducing opacity
    document.querySelector('header').style.opacity = "0"; // Make navbar transparent
  } else {
    // Scrolling up, show the navbar by restoring opacity
    document.querySelector('header').style.opacity = "1"; // Make navbar fully visible
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});

(function() {
  "use strict";
  const mobileNavBtn = document.querySelector(".mobile-nav-btn");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileCloseBtn = document.querySelector(".mobile-nav__close-btn");
  mobileNavBtn.addEventListener("click", showMobileNav);
  mobileCloseBtn.addEventListener("click", hideMobileNav);
  mobileNav.addEventListener("click", hideMobileNav);

  /* 
    Mobile nav functionality
  */
  // Function to show mobile menu on click
  function showMobileNav(e) {
    mobileNav.classList.add("mobile-nav--active");
  }

  // Function to display relevant section and hide full screen mobile menu
  function hideMobileNav(e) {
    mobileNav.classList.remove("mobile-nav--active");
  }
})();
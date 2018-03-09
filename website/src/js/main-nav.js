(function() {
  "use strict";
  const pageNavUl = document.querySelector(".page-header__list");
  const mobileNavUl = document.querySelector(".mobile-nav__list");
  pageNavUl.addEventListener("click", scrollToSection);
  mobileNavUl.addEventListener("click", scrollToSection);

  /* 
    On click scroll to relevant section fnctionality
  */
  function scrollToSection(e) {
    const sectionId = e.target.getAttribute("href");
    const section = document.querySelector(sectionId);
    const sectionY = section.offsetTop;
    window.innerWidth > 920 ?  window.scrollTo(0, sectionY-120) : window.scrollTo(0, sectionY-100);
    e.preventDefault();
  }
})();

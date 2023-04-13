const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  hamburgerMenu.classList.toggle("rotate-bar-1");
  hamburgerMenu.classList.toggle("rotate-bar-2");
  hamburgerMenu.classList.toggle("rotate-bar-3");
});

$(".testimonial-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

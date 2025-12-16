const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector(".mobile-nav");

hamburgerMenu.addEventListener("click", () => {
  if (mobileNav.style.display == "none") {
    mobileNav.style.display = "flex";
  } else {
    mobileNav.style.display = "none";
  }
});

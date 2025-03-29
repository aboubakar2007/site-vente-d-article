let scrolin = 0;
const navbar = document.querySelector("header");
console.log(navbar);
window.addEventListener("scroll", () => {
  let varscroll = window.scrollY;
  console.log(varscroll);
  if (varscroll > scrolin) {
    navbar.style.top = "-90px";
    navbar.style.transition = "0.5s";
  } else {
    navbar.style.top = "0";
  }
  scrolin = varscroll;
});

// Scroll To Top
const scrollToTopBtn = document.querySelector(".back-to-home");
window.addEventListener("scroll", function () {
  if (scrollY > 200) {
    scrollToTopBtn.classList.add("show-btn");
  }
});
window.addEventListener("scroll", function () {
  if (scrollY < 200) {
    scrollToTopBtn.classList.remove("show-btn");
  }
});
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0 });
});

// Dark-Light Switch

let mode = window.localStorage.getItem("mode");
const switchBtn = document.querySelector(".dark-light");



const switchToDark = () => {
  document.body.classList.add("dark-mode");
};
const switchToLight = () => {
  document.body.classList.remove("dark-mode");
};

if (mode == "dark") {
  switchToDark();
}

switchBtn.addEventListener("click", function () {
  mode = window.localStorage.getItem("mode");
  if (mode == "dark") {
    switchToLight();
    window.localStorage.setItem("mode", "light");
  } else {
    switchToDark();
    window.localStorage.setItem("mode", "dark");
  }
});

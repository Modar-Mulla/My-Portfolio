// Scroll To Top
const scrollToTopBtn = document.querySelector(".back-to-home");
if (scrollToTopBtn !== null) {
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
}

// Dark-Light Switch

let mode = window.localStorage.getItem("mode");
const switchBtn = document.querySelector(".dark-light");
const bottomSvg = document.querySelector(".bottom-svg path");
const upSvg = document.querySelectorAll(".up-svg path");

const switchToDark = () => {
  document.body.classList.add("dark-mode");
  bottomSvg.style.fill = "#ff6d00";
  bottomSvg.parentNode.style.backgroundColor = "#034078";
  upSvg.forEach(e => {
    e.style.fill = "#ff6d00";
    e.parentNode.style.backgroundColor = "#034078";
  });
  
};
const switchToLight = () => {
  document.body.classList.remove("dark-mode");
  bottomSvg.style.fill = "#034078";
  bottomSvg.parentNode.style.backgroundColor = "white";
  upSvg.forEach(e=>{
    e.style.fill = "#034078";
    e.parentNode.style.backgroundColor = "white";
  })
  
};

if (mode == "dark") {
  switchToDark();
}
if (switchBtn !== null) {
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
}

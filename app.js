function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const presentYear = new Date();
let year = presentYear.getFullYear();
document.querySelector('.year').innerHTML = year;

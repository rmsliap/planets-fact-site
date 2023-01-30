// import data from "../data.json" assert { type: "json" };
import { data } from "./data.js";
import { renderInfo } from "./renderInfo.js";
import { changeActive, firstTabActive } from "./changeActive.js";

changeActive(data[0]);

const navLis = document.querySelectorAll("li");
const hgIcon = document.querySelector(".hb-icon");
const navList = document.querySelector(".nav-list");

navLis.forEach((navLi) => {
  navLi.addEventListener("click", (e) => {
    const [planet] = data.filter(
      (el) => e.target.textContent.toLowerCase() === el.name.toLowerCase()
    );
    renderInfo(planet);
    firstTabActive(planet);
    changeActive(planet);
    navList.classList.toggle("visible");
  });
});

hgIcon.addEventListener("click", function () {
  navList.classList.toggle("visible");
});

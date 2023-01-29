import data from "../data.json" assert { type: "json" };
import { renderInfo } from "./renderInfo.js";
import { changeActive, firstTabActive } from "./changeActive.js";
import { colors } from "./activeColors.js";

changeActive(data[0]);

const navLis = document.querySelectorAll("li");
navLis.forEach((navLi) => {
  navLi.addEventListener("click", (e) => {
    const [planet] = data.filter(
      (el) => e.target.textContent.toLowerCase() === el.name.toLowerCase()
    );
    const [{ color }] = colors.filter(
      (el) => e.target.textContent.toLowerCase() === el.planet.toLowerCase()
    );
    renderInfo(planet);
    firstTabActive(color);
    changeActive(planet, color);
  });
});

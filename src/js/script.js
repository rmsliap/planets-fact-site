import data from "../data.json" assert { type: "json" };
import { renderInfo } from "./renderInfo.js";
import { changeActive } from "./changeActive.js";

const navLis = document.querySelectorAll("li");

navLis.forEach((navLi) => {
  navLi.addEventListener("click", (event) => {
    targetPlanet(event);
  });
});

function targetPlanet(e) {
  const [planet] = data.filter(
    (el) => e.target.textContent.toLowerCase() === el.name.toLowerCase()
  );
  renderInfo(planet);
  changeActive(planet);
}

changeActive(data[0]);

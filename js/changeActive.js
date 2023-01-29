import { updateDesc } from "./updateDesc.js";

const tabs = document.querySelectorAll(".tab");

function changeActive(planet) {
  tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      tabs.forEach((tab) => {
        tab.style.backgroundColor = "transparent";
      });
      e.target.style.backgroundColor = planet.color;
      updateDesc(planet, e.target);
    });
  });
}

function firstTabActive(planet) {
  tabs.forEach((tab) => {
    tab.style.backgroundColor = "transparent";
  });
  tabs[0].style.backgroundColor = planet.color;
  const geologyImg = document.querySelector(".geology-img");
  geologyImg.style.display = "none";
}

export { changeActive, firstTabActive };

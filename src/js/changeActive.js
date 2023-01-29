import { updateDesc } from "./updateDesc.js";

const tabs = document.querySelectorAll(".tab");

function changeActive(planet, color) {
  tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      e.target.classList.add("active");
      // Update Description
      updateDesc(planet, e.target);
    });
  });
}

function firstTabActive(color) {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  tabs[0].classList.add("active");
  const geologyImg = document.querySelector(".geology-img");
  geologyImg.style.display = "none";
}

export { changeActive, firstTabActive };

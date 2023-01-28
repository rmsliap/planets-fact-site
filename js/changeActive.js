import { updateDesc } from "./updateDesc.js";

function changeActive(planet) {
  const tabs = document.querySelectorAll(".tab");
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

export { changeActive };

import { data } from "./data";

const navLis = document.querySelectorAll("li");

navLis.forEach((navLi) => {
  navLi.addEventListener("click", (event) => {
    targetPlanet(event);
  });
});

// Target planet from data array
function targetPlanet(e) {
  const [planet] = data.filter(
    (el) => e.target.textContent.toLowerCase() === el.name.toLowerCase()
  );
  // console.log(planet);
  renderInfo(planet);
}

function renderInfo(planet) {
  const title = document.querySelector(".planet-title");
  const desc = document.querySelector(".planet-desc");
  const source = document.querySelector(".planet-source a");
  const planetImg = document.querySelector(".planet-img");

  title.textContent = planet.name;
  desc.textContent = planet.overview.content;
  source.href = planet.overview.source;
  planetImg.src = planet.images.planet;
}

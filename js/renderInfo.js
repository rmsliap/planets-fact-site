function renderInfo(planet) {
  const title = document.querySelector(".planet-title");
  const desc = document.querySelector(".planet-desc");
  const source = document.querySelector(".planet-source a");
  const planetImg = document.querySelector(".planet-img");

  const rotation = document.querySelector(".rotation");
  const revolution = document.querySelector(".revolution");
  const radius = document.querySelector(".radius");
  const temperature = document.querySelector(".temperature");

  title.textContent = planet.name;
  desc.textContent = planet.overview.content;
  source.href = planet.overview.source;
  planetImg.src = planet.images.planet;
  rotation.textContent = planet.rotation;
  revolution.textContent = planet.revolution;
  radius.textContent = planet.radius;
  temperature.textContent = planet.temperature;
}

export { renderInfo };

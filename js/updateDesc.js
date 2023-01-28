function updateDesc(planet, target) {
  const desc = document.querySelector(".planet-desc");
  const source = document.querySelector(".planet-source a");
  const planetImg = document.querySelector(".planet-img");
  const geologyImg = document.querySelector(".geology-img");

  if (target.classList.contains("internal")) {
    desc.textContent = planet.structure.content;
    source.href = planet.structure.source;
    planetImg.src = planet.images.internal;
    geologyImg.style.display = "none";
  } else if (target.classList.contains("surface")) {
    desc.textContent = planet.geology.content;
    source.href = planet.geology.source;
    planetImg.src = planet.images.planet;
    geologyImg.src = planet.images.geology;
    geologyImg.style.display = "block";
  } else if (target.classList.contains("overview")) {
    desc.textContent = planet.overview.content;
    source.href = planet.overview.source;
    planetImg.src = planet.images.planet;
    geologyImg.style.display = "none";
  }
}

export { updateDesc };

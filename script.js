

const planetsData = [
  { name: "Mercury", size: 16, radius: 90, speed: 20 },
  { name: "Venus", size: 22, radius: 140, speed: 35 },
  { name: "Earth", size: 24, radius: 200, speed: 45 },
  { name: "Mars", size: 18, radius: 270, speed: 60 },
  { name: "Jupiter", size: 50, radius: 380, speed: 100 },
  { name: "Saturn", size: 44, radius: 500, speed: 130 },
  { name: "Uranus", size: 32, radius: 620, speed: 160 },
  { name: "Neptune", size: 30, radius: 740, speed: 190 }
];

planetsData.reverse(); 

const wrap = document.getElementById("planets");

planetsData.forEach(p => {
  const orbit = document.createElement("div");
  orbit.className = "orbit";
  orbit.style.width = orbit.style.height = p.radius * 2 + "px";
  orbit.style.animationDuration = p.speed + "s";

  const planet = document.createElement("div");
  planet.className = `planet ${p.name.toLowerCase()}`;
  planet.style.width = planet.style.height = p.size + "px";

  const label = document.createElement("div");
  label.className = "planet-label";
  label.dataset.lang = p.name.toLowerCase(); // key for translation in translations
  label.textContent = p.name; // original text (English)

  planet.appendChild(label);

  // Hover effects
  planet.addEventListener("mouseenter", () => {
    orbit.style.animationPlayState = "paused";
  });
  planet.addEventListener("mouseleave", () => {
    orbit.style.animationPlayState = "running";
  });

  // Click on the planet
  planet.addEventListener("click", () => {
    location.href = `planet.html?name=${p.name}`;
  });

  orbit.appendChild(planet);
  wrap.appendChild(orbit);
});

// Click on the Sun
document.getElementById("sun").addEventListener("click", () => {
  location.href = "planet.html?name=Sun";
});

// Function to update planet names when changing languages
function updatePlanetLabels() {
  const lang = localStorage.getItem('language') || 'en';
  document.querySelectorAll('.planet-label').forEach(label => {
    const key = label.dataset.lang;
    if (translations[lang] && translations[lang][key]) {
      label.textContent = translations[lang][key];
    }
  });

  // Sun tag update
  const sunLabel = document.querySelector(".sun-label");
  if (sunLabel && translations[lang] && translations[lang].sun) {
    sunLabel.textContent = translations[lang].sun;
  }
}

// Update when loading the page
document.addEventListener("DOMContentLoaded", () => {
  updatePlanetLabels();
});

// Update when language changes (language.js triggers an event)
window.addEventListener("languageChanged", updatePlanetLabels);
/*
Bonus: Do the same process to create the moons.
Be careful, each planet has a certain amount of moons. How should you display them?
Should you still use an array for the planets ? Or an array of objects ?
*/

// Create an array which value is the planets of the solar system.
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Uranus'];
const colors = ['blue', 'red', 'green', 'yellow', 'purple', 'gray', 'pink', 'orange']

// Get the section
const listSection = document.querySelector(".listPlanets");

for (let i = 0; i < planets.length; i++) {

    const planetDiv = document.createElement("div");

    planetDiv.classList.add("planet");
    planetDiv.classList.add(colors[i]);

    planetDiv.textContent = planets[i];

    listSection.appendChild(planetDiv);
}
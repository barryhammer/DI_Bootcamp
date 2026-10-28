/*
Bonus: Do the same process to create the moons.
Be careful, each planet has a certain amount of moons. How should you display them?
Should you still use an array for the planets ? Or an array of objects ?
*/

// Create an array which value is the planets of the solar system.
// Used variable name orbs, since I want to use 'planets' as the name of the HTML id.
const planets = ['Venus', 'Mercury', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Uranus'];
const colors = ['blue', 'red', 'green', 'yellow', 'purple', 'black', 'pink', 'orange']

// For each planet in the array, create a <div> using createElement. This div should have a class named 
// "planet".
const container = document.querySelector("section.listPlanets") //Takes one parameter, defines what you want to select.

for (let i = 0; i < planets.length; i++) {
    const planets = document.createElement()

    // Add the required planet class
    planets.classList.add("planet");

    // Add the color class from the colors array
    planets.classList.add(colors[i]);

    // Add planet name from orbs array
    planets.textContent = planets[i];

    // Append the div to the section
    section.appendChild(listPlanets);
}
const colors = [
    "#000000", // Black
    "#FFFFFF", // White
    "#FF0000", // Red
    "#00FF00", // Lime
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFA500", // Orange
    "#800080", // Purple
    "#FFC0CB", // Pink
    "#808080", // Gray
    "#A52A2A", // Brown
    "#008000", // Green
    "#FFD700", // Gold
    "#C0C0C0", // Silver
    "#4B0082", // Indigo
    "#EE82EE", // Violet
    "#40E0D0", // Turquoise
    "#8B4513", // Saddle Brown
    "#7FFF00"  // Chartreuse
];

function clear(){
    const section = document.getElementsByClassName('grid');
    section.replaceChildren(); // Clears out grid
}

// Select the grid container
function id(id) {
    return document.getElementById(id);
}

// Setting a 9*9 grid
let count = 0;
let idcount = 0;

window.onload = () => {
    for (let i = 0; i < 81; i++) {

        // Create tile & gave it CSS of the
        // tile and then append it
        let tile = document.createElement("p");
        tile.id = idcount;
        idcount++;
        tile.classList.add("tile");
        tile.textContent = "";
      
        id("canvas").appendChild(tile);
    }

    // Grid will be displayed if setting
    // the display to none
    id("togglebtn").addEventListener("click", () => {
        if (count % 2 == 0) {
            id("canvas").style.display = "none";
            count++;
        } else {
            id("canvas").style.display = "flex";
            count++;
        }
    });
};
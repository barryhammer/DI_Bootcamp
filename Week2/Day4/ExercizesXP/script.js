// Color array including your original options and the two additions
const systemColors = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", 
  "#00FFFF", "#FFA500", "#800080", "#FFC0CB", "#808080", 
  "#A52A2A", "#008000", "#FFD700", "#C0C0C0", "#4B0082", 
  "#EE82EE", "#40E0D0", "#8B4513", "#7FFF00", "#FF1493", 
  "#00FA9A"
];

let selectedColor = systemColors[0];

function generateGrid(containerId, columns, rows, colorsArray = null) {
  const container = document.getElementById(containerId);
  const totalCells = columns * rows;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.addEventListener("mousedown", () => {
    cell.style.backgroundColor = selectedColor;
    });

    cell.addEventListener("mouseover", () => {
        if (mouseDown) {
            cell.style.backgroundColor = selectedColor;
        }
    });

    if (colorsArray && colorsArray.length > 0) {
    const colorIndex = i % colorsArray.length;
    cell.style.backgroundColor = colorsArray[colorIndex];

    cell.addEventListener("click", () => {
        selectedColor = colorsArray[colorIndex];
    });
}
    container.appendChild(cell);
  }
}

let mouseDown = false;

document.addEventListener("mousedown", () => {
    mouseDown = true;
});

document.addEventListener("mouseup", () => {
    mouseDown = false;
});

// Generate both grids
generateGrid('grid-3x7', 3, 7, systemColors);
generateGrid('grid-9x9', 9, 9);

// Clear button logic
document.getElementById("clear-btn").addEventListener("click", () => {

    const cells = document.querySelectorAll("#grid-9x9 .cell");

    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });

});

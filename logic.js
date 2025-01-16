const gridContainer = document.querySelector("#grid-container");

// Function to create the grid
function createGrid(size) {
    gridContainer.innerHTML = ""; // Clear previous grid
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = "black";
            });
            column.appendChild(square);
        }
        gridContainer.appendChild(column);
    }
}

// Function to resize the grid
function resizeGrid() {
    const newSize = parseInt(prompt("Enter new size for the grid (1–100):").trim());
    if (newSize >= 1 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Invalid size. Please enter a number between 1 and 100.");
    }
}

// Initialize default grid and set resize button event listener
document.querySelector("#resize-button").addEventListener("click", resizeGrid);
createGrid(16);
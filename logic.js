const grid = document.querySelector("#grid-container");

for (let i = 0; i < 16; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });
        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = "grey";
        })
        column.appendChild(square);
    }
    grid.appendChild(column);
}

function resizeGrid() {
    const newSize = prompt("Enter new size for the grid from 1 to 100:");
    if (newSize >= 1 && newSize <= 100) {
        let oldGrid = document.getElementsByClassName("column");
        while (oldGrid[0]) {
            oldGrid[0].parentNode.removeChild(oldGrid[0]);
        }
        for (let i = 0; i < newSize; i++) {
            const column = document.createElement("div");
            column.classList.add("column");
            for (let j = 0; j < newSize; j++) {
                const square = document.createElement("div");
                square.classList.add("square");
                square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = "black";
                });
                square.addEventListener("mouseleave", () => {
                square.style.backgroundColor = "grey";
                })
                column.appendChild(square);
            }
            grid.appendChild(column);
        }
    }
    else {
        alert("Invalid size");
    }
}

const resizeBtn = document.querySelector("#resize-button");
resizeBtn.addEventListener("click", resizeGrid);
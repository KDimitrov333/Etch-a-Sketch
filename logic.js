const grid = document.querySelector("#grid-container");
let colorInfo = [];
let opacityInfo = [];

for (let i = 0; i < 16; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    colorInfo[i] = [];
    opacityInfo[i] = [];
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        const sqrBackground = document.createElement("div");
        sqrBackground.classList.add("square-background");
        sqrBackground.addEventListener("mouseenter", () => {
            if (sqrBackground.style.backgroundColor == "") {
                colorInfo[i][j] = "rgb(" + Math.random() * 255 + ", " + Math.random() * 255 + ", "+ Math.random() * 255 + ")";
            }
            opacityInfo[i][j] = opacityInfo[i][j] + 0.1;
            sqrBackground.style.backgroundColor = "black";
            sqrBackground.style.opacity = 1;
        });
        sqrBackground.addEventListener("mouseleave", () => {
            sqrBackground.style.backgroundColor = colorInfo[i][j];
            sqrBackground.style.opacity = opacityInfo[i][j];
        })
        square.appendChild(sqrBackground);
        colorInfo[i][j] = sqrBackground.style.backgroundColor;
        opacityInfo[i][j] = 0;
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
            colorInfo[i] = [];
            opacityInfo[i] = [];
            for (let j = 0; j < newSize; j++) {
                const square = document.createElement("div");
                square.classList.add("square");
                const sqrBackground = document.createElement("div");
                sqrBackground.classList.add("square-background");
                sqrBackground.addEventListener("mouseenter", () => {
                    if (sqrBackground.style.backgroundColor == "") {
                        colorInfo[i][j] = "rgb(" + Math.random() * 255 + ", " + Math.random() * 255 + ", "+ Math.random() * 255 + ")";
                    }
                    opacityInfo[i][j] = opacityInfo[i][j] + 0.1;
                    sqrBackground.style.backgroundColor = "black";
                    sqrBackground.style.opacity = 1;
                });
                sqrBackground.addEventListener("mouseleave", () => {
                    sqrBackground.style.backgroundColor = colorInfo[i][j];
                    sqrBackground.style.opacity = opacityInfo[i][j];
                })
                square.appendChild(sqrBackground);
                colorInfo[i][j] = sqrBackground.style.backgroundColor;
                opacityInfo[i][j] = 0;
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
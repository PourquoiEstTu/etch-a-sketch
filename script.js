const container = document.querySelector(".container");
let rowDivs = [];
let currentSize = 2;

function createGrid(size) {
    if (typeof size !== "number") return false;

    for (let i = 0; i < size; i++) {
        rowDivs[i] = document.createElement("div");
        rowDivs[i].style.cssText += "display: flex; flex-direction: row; flex: 1; align-items: stretch;";
        rowDivs[i].classList.add("row");
        container.appendChild(rowDivs[i]);
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            div.classList.add("box");
            div.style.cssText += "border: 2px solid red; margin: 0; flex: 1; ";
            div.addEventListener("mouseover", () => div.style.setProperty("background-color", "yellow "));
            div.addEventListener("mouseout", () => div.style.setProperty("background-color", "white"));
            rowDivs[i].appendChild(div);
        }
    }
}
// default grid size
createGrid(10);

const gridBtn = document.querySelector(".grid-size");
let gridSize;
gridBtn.addEventListener("click", () => {
    for (row of rowDivs) {
        while (row.firstChild) {
            row.removeChild(row.firstChild);
        }
        row.remove();
    }
    do {
        gridSize = prompt("How many squares do you want on the grid? (Z x Z grid, choose Z)");
        // console.log(parseInt(gridSize));
    }while(!parseInt(gridSize));
    gridSize = parseInt(gridSize);
    createGrid(gridSize);
});
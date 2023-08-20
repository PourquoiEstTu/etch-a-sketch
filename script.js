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
            div.style.cssText += "flex: 1; ";
            div.addEventListener("mouseover", () => div.style.setProperty("background-color", "purple"));
            // div.addEventListener("mouseout", () => div.style.setProperty("background-color", "white"));
            rowDivs[i].appendChild(div);
        }
    }
}
// default grid size
createGrid(5);

const gridBtn = document.querySelector("button.grid");
let gridSize;
gridBtn.addEventListener("click", () => {
    for (row of rowDivs) {
        while (row.firstChild) {
            row.removeChild(row.firstChild);
        }
        row.remove();
    }
    while (true) {
        gridSize = prompt("How many squares do you want on the grid? (Z x Z grid, choose Z). Choose a Z which is at most 100.");
        // console.log(parseInt(gridSize));
        // console.log(parseInt(gridSize) > 100);
        if (!parseInt(gridSize)) continue;
        else if (parseInt(gridSize) > 100 || parseInt(gridSize) <= 0) continue;
        else break;
    }
    gridSize = parseInt(gridSize);
    createGrid(gridSize);
});

function replaceChildren(parent, element, event, eventFunc) {
    let children = parent.getElementsByTagName(`${element}`);
    let newChildren = [];
    let count = 0;
    for (child of children) {
        // child.removeEventListener("mouseover", () => child.style.setProperty("background-color", "purple"));
        let newChild = child.cloneNode();
        parent.insertBefore(newChild, child);
        parent.removeChild(child);
        newChildren[count++] = newChild;
    }
    return newChildren;
}

const randBtn = document.querySelector("button.randomize");
randBtn.addEventListener("click", () => {
    for (let row of rowDivs) {
        let newChildren = replaceChildren(row, "div");
        for (let child of newChildren) {
            child.addEventListener("mouseover", () => {
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                child.style.setProperty("background-color", `rgb(${r}, ${g}, ${b})`);
            });
        }
    }
});
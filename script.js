const container = document.querySelector(".container");


const drawScreen = document.querySelector(".draw-screen")

const gridSizeButton = document.querySelector("#grid-size-button");

function generateSquares(size){
    container.textContent = "";
    for (let i = 0; i < size; i++){
        //let row = document.createElement("div");
        //row.classList.add("row");
        for (let x = 0; x < size; x++){
            let square = document.createElement("div");
            square.style.width = String(parseInt(window.getComputedStyle(container).width) / size) + "px";
            square.style.height = String(parseInt(window.getComputedStyle(container).width) / size) + "px";
            square.classList.add("square");
            
            container.appendChild(square);
        }
        //container.appendChild(row);
    }
 
}

gridSizeButton.addEventListener("click", () => {
    let gridSize = +prompt("Number of squares per side (maximum is 100): ");
    if (gridSize){
        if (gridSize > 100){
            gridSize = 100;
            
        }
    } else {
        gridSize = 16;
    }

    generateSquares(gridSize);
});

generateSquares(16);

container.addEventListener("mouseover", (elem) => {
    let hoveredSquare = elem.target

    if (hoveredSquare.getAttribute("class") == "square"){
        hoveredSquare.style["background-color"] = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    }
});
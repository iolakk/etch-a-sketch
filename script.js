const container = document.querySelector(".container");

for (let i = 0; i < 16; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    for (let x = 0; x < 16; x++){
        let square = document.createElement("div");
        square.classList.add("square");

        row.appendChild(square);
    }
    container.appendChild(row);
}

container.addEventListener("mouseover", (elem) => {
    let hoveredSquare = elem.target

    if (hoveredSquare.getAttribute("class") == "square"){
        hoveredSquare.style["background-color"] = "red";
    }
    
})
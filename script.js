const squareContainer = document.querySelector('#square-container');

// buttons
const gridSizeButton = document.querySelector('.grid-size');

let opacity = 1;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function clearGridContainer() {
    let square = squareContainer.lastElementChild;
    while (square) {
        squareContainer.removeChild(square);
        square = squareContainer.lastElementChild;
    }
}

function colorSquare(target) {
    if (opacity > 1) {
        opacity = 0;
    }

    const r = getRndInteger(0, 255);
    const g = getRndInteger(0, 255);
    const b = getRndInteger(0, 255);

    target.style['background-color'] = `rgb(${r}, ${g}, ${b})`;
    target.style['opacity'] = opacity;
    opacity += 0.1;
}

function createSquares(x = 16, y = 16) {
    for (let i = 1; i <= y; i++) {
        // create a column
        const column = document.createElement('div');
        column.classList.add('column');
        squareContainer.appendChild(column);

        // create a row
        for (let i = 1; i <= x; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            column.appendChild(square);

            square.addEventListener('mouseover', (e) => {
                /* 
                send over event's target (that will be the square we are currently hovering over)
                to the colorSquare() function
                */
                colorSquare(e.target);
            });
        }
    }
}

function setGridSize() {
    const x = prompt('x:');
    const y = prompt('y:');

    if (x > 100 || y > 100) {
        alert('Limit is 100');
        return;
    }

    clearGridContainer();
    createSquares(x, y);
}

gridSizeButton.addEventListener('click', setGridSize);

createSquares();
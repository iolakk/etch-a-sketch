const squareContainer = document.querySelector('#square-container');

// buttons
const gridSizeButton = document.querySelector('.grid-size');

function clearGridContainer() {
    let square = squareContainer.lastElementChild;
    while (square) {
        squareContainer.removeChild(square);
        square = squareContainer.lastElementChild;
    }
}

function colorSquare(target) {
    target.style['background-color'] = 'red';
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

    clearGridContainer();
    createSquares(x, y);
}

gridSizeButton.addEventListener('click', setGridSize);

createSquares();
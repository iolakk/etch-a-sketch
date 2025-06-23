const squareContainer = document.querySelector('#square-container');
function createSquares() {
    for (let i = 1; i <= 16; i++) {
        // create a column
        const column = document.createElement('div');
        column.classList.add('column');
        squareContainer.appendChild(column);

        // create a row
        for (let i = 1; i <= 16; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            column.appendChild(square);
        }
    }
}

createSquares();
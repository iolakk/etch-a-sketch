const squareContainer = document.querySelector('#square-container');
function createSquares() {
    for (let i = 1; i <= 32; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        squareContainer.appendChild(square);
    }
}

createSquares();
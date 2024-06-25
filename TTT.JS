let currentPlayer = 'X';
let gameBoard = [];

for (let i = 0; i < 9; i++) {
    gameBoard.push('');
}

const cellElements = document.querySelectorAll('.cell');

cellElements.forEach((cell) => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
    const cellIndex = event.target.id.replace('cell-', '');
    if (gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        event.target.classList.add(currentPlayer.toLowerCase());
        checkForWin();
        currentPlayer = currentPlayer === 'X'? 'O' : 'X';
    }
}

function checkForWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        if (
            gameBoard[condition[0]] === gameBoard[condition[1]] &&
            gameBoard[condition[1]] === gameBoard[condition[2]] &&
            gameBoard[condition[0]]!== ''
        ) {
            celebrateWin(gameBoard[condition[0]]);
            return;
        }
    }
}

function celebrateWin(winner) {
    const winningCells = document.querySelectorAll(`.${winner.toLowerCase()}`);
    winningCells.forEach((cell) => {
        cell.classList.add('winning-cell');
    });
    setTimeout(() => {
        alert(`Player ${winner} wins!`);
    }, 1000);
}
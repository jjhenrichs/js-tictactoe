// module.exports.index = index;

// var http = require('http')

// var hostname = '127.0.0.1';
// var port = 8080;

// var server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end(index);
// });

// server.listen(port, hostname, () => {
//     console.log(`Server ruinning at http://${hostname}:${port}/`);
// })

// Spaces of the tic-tac-toe board
var board = ["", "", "", "", "", "", "", "", ""]

// Stores the number of turns
var turn = 0;

// By defaut Player 1 goes first
var mark = "X";

var message = document.getElementById('message');

// Retrieves id and position of tile from the board
var clickTile = (id, position) => {
    var element = document.getElementById(id);

    // check to see if space is already occupied
    if (board[position] == "") {
        element.innerHTML = mark;
        board[position] = mark;
        
        updateStatus();             // Change the status once a valid move is made
        
    }

}

// Updates the turn, mark, and tells whose turn it is.
var updateStatus = () => {
    turn++;

    if (turn > 4) {

        if (verifyWinner()) {
            boardUnclickable();
            return;
        } else {
            if (!board.includes("")) {
                message.innerHTML = "This game has concluded in a draw.";
                return;
            }
        }
    }

    mark = turn % 2 == 0 ? "X" : "O";

    if (mark == "O") {
        message.innerHTML = "It's Player 2's (O) turn."
    } else {
        message.innerHTML = "It's Player 1's (X) turn."
    }

}

// Winning Combinations
const WinCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

// Check for a winner
var verifyWinner = () => {

    for (i = 0; i < WinCombos.length; i++) {

        arr = [];

        for (j = 0; j < WinCombos[i].length; j++){
            arr.push(board[WinCombos[i][j]]);
        }

        if (arr.every((value) => value == mark) ) {
            if (mark == "X") {
                message.innerHTML = "Player 1 Wins. Congrats, Player 1";
            } else {
                message.innerHTML = "Player 2 Wins. Congrats, Player 2.";
            }

            return true;
        }
    }

    return false;
}

var boardUnclickable = () => {
    for (i = 0; i < board.length; i++) {
        if (board[i] == "") {
            board[i] = "-";
        }
    }
}
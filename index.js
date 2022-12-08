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
var arr = ["", "", "", "", "", "", "", "", ""]

// Stores the number of turns
var turn = 1;

// By defaut Play 1 (X) goes first
var mark = "X";

// Retrieves id from the board
var clickTile = (id) => {
    document.getElementById(id).innerHTML = mark;
    turn++ == 9 ? boardFilled() : turn;
    mark = turn % 2 == 0 ? "O" : "X";   // Mark changes based on who turn it is (Odd for Player 1 (X), Even for Player 2 (O))
    console.log(turn, mark);
    document.querySelector('#'+id).disabled = true; //Makes the tile unclickable after it is been clicked
}



// When the Board is Completed
var boardFilled = () => document.getElementById('message').innerHTML = "Draw. There are no winners."

console.log(turn, mark);
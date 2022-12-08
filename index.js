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

var message = document.getElementById('message');

// Retrieves id from the board
var clickTile = (id, position) => {
    var element = document.getElementById(id);

    // check to see if space is already occupied
    if (arr[position] == "") {
        element.innerHTML = mark;
        arr[position] = mark;
        updateStatus();             // Change the status once a valid move is made
    } else {
        message.innerHTML = `Tile ${position+1} is already occupied.`;
    }
    
}

var updateStatus = () => {
    turn++;
    mark = turn % 2 == 0 ? "O" : "X";

    if (mark == "O") {
        message.innerHTML = "It's Player 2's (O) turn."
    } else {
        message.innerHTML = "It's Player 1's (X) turn."
    }
}

console.log(turn, mark);
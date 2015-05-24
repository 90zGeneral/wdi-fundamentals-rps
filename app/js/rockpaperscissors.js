/*   Provided Code - Please Don't Edit   */
//////////////////////////////////////////////////////
//////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        return "tie"; 
    }
    else if (playerMove === "rock") {
        if (computerMove === "paper") {
            return "computer";
        }
        else {
            return "player";
        }
    }
    else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            return "computer";
        }
        else {
            return "player";
        }
    }
    else if (playerMove === "paper") {
        if (computerMove === "scissors") {
            return "computer";
        }
        else {
            return "player";
        }
    }      
}

function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
        console.log("Let's play Rock, Paper, Scissors");
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var theWinner = getWinner(playerMove, computerMove);
        if (theWinner === "player") {
            playerWins += 1;
        }
        else if (theWinner === "computer") {
            computerWins += 1;
        }
        console.log("You picked " + playerMove + " while the computer picked " + computerMove);

        console.log("The Winner is: " + theWinner);

        console.log("The score is currently: " + "player = " + playerWins + " VS " + "computer = " + computerWins + "\n");

 
    }

    return ["Final score: " + playerWins, computerWins];
}
playToFive();


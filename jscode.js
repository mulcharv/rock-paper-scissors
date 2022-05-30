
// A function called computerPlay that randomly returns either 'Dunk', 'Block' or 'Three'.

function computerPlay() {
    let output = Math.floor(Math.random()*3); // Returns a random integer from 0 to 2
    console.log(output);
    if (output == 0) {
        return 'block';
    } 
    else if (output == 1) {
        return 'dunk';
    }

    else {
        return 'three';
    }

}


let playerWin;
let computerWin;
let draw;

// A function that compares the results of playerSelection and computerSelection.

let playerScore= 0;
let computerScore= 0;
let drawScore= 0;

function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        drawScore++;
        return (draw, 'Draw! You and opponent used the same move');
    }

    else if ((playerSelection == 'block') && (computerSelection == 'dunk')) {
        computerScore++;
        return (computerWin, 'You lost this play! Opponent dunked over your block');
    } 

    else if ((playerSelection == 'block') && (computerSelection == 'three')) {
        playerScore++;
        return (playerWin, 'You win this play! You blocked the opponent three');
    } 

    else if ((playerSelection == 'dunk') && (computerSelection == 'three')) {
        computerScore++;
        return (computerWin, 'You lost this play! Opponent three worth more than your dunk');
    }  

    else if ((playerSelection == 'dunk') && (computerSelection == 'block')) {
        playerScore++;
        return (playerWin, 'You won this play! You dunked over the opponent block');
    } 

    else if ((playerSelection == 'three') && (computerSelection == 'block')) {
        computerScore++;
        return (computerWin,'You lost this play! Opponent blocked your three');
    } 

    else  {
        playerScore++;
        return (playerWin, 'You won this play! Your three worth more thank opponent block');
    } 


}

// A function that computes playRound for 5 rounds.




function game () {
    
    for (let i=0; i < 5; i++) { 
        let a = prompt ('Choose your move: block, dunk, or three');
        let b = a.toLowerCase();
        let playerSelection = b;
        const computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        console.log('Your score is ' + playerScore);
        console.log('Computer score is ' + computerScore);


    }

    if (playerScore > computerScore) {
        return 'Congratulations, you win!';
    }

    else if (computerScore > playerScore) {
        return 'You lost, better luck next time!';
    }

    else {
        return 'Draw, Well played!';
    }
}



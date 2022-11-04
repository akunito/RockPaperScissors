function random(number) {
    return Math.floor(Math.random() * number);
  }

function getComputerChoice() {
    return random(3);
}

function getUserInput() {
    num = prompt("Please, choose number: 0- Rock | 1- Paper | 2- Scissors ");
    return num
}

function playerSelection() {
    console.log("Please, choose: ");
    console.log("0 - Rock");
    console.log("1 - Paper");
    console.log("2 - Scissors");
    let num = 3
    while (num > 2 || num < 0) {
        num = getUserInput();
    }
    return num
}

function playRound() {

    const playerNum = playerSelection();
    const computerNum = getComputerChoice()

    switch(computerNum) {           // error in switch
        case 0:
            if (playerNum == 0) {
                console.log("Computer've choosen 'Rock' and Human 'Rock' ");
                console.log("THIS IS A DRAW !");
                return 0

            } else if (playerNum == 1) {
                console.log("Computer've choosen 'Rock' and Human 'Paper' ");
                console.log("HUMAN WINS !");
                return 2
                
            } else if (playerNum == 2) {
                console.log("Computer've choosen 'Rock' and Human 'Scissors' ");
                console.log("COMPUTER WINS !");
                return 1
                
            } else {
                console.log("else in humanNum - input error?")
                return 0
            }
        case 1:
            if (playerNum == 0) {
                console.log("Computer've choosen 'Paper' and Human 'Rock' ");
                console.log("COMPUTER WINS !");
                return 1

            } else if (playerNum == 1) {
                console.log("Computer've choosen 'Paper' and Human 'Paper' ");
                console.log("THIS IS A DRAW !");
                return 0
                
            } else if (playerNum == 2) {
                console.log("Computer've choosen 'Paper' and Human 'Scissors' ");
                console.log("HUMAN WINS !");
                return 2
                
            } else {
                console.log("else in humanNum - input error?")
                return 0
            }
        case 2:
            if (playerNum == 0) {
                console.log("Computer've choosen 'Scissors' and Human 'Rock' ");
                console.log("HUMAN WINS !");
                return 2

            } else if (playerNum == 1) {
                console.log("Computer've choosen 'Scissors' and Human 'Paper' ");
                console.log("COMPUTER WINS !");
                return 1
                
            } else if (playerNum == 2) {
                console.log("Computer've choosen 'Scissors' and Human 'Scissors' ");
                console.log("THIS IS A DRAW !");
                return 0
                
            } else {
                console.log("else in humanNum - input error?")
                return 0
            }
        default:
            console.log("computerNum error?")
            return 0
    }
    
}

let computerScore = 0;
let humanScore = 0;

while (humanScore < 3 && computerScore < 3) {
    //play
    let roundNum = playRound();

    if (roundNum == 1){
        computerScore += 1
    } else if (roundNum == 2) {
        humanScore += 1
    } 
    console.log("-----------------------------------");

    //check score
    console.log("");
    console.log(`SCORE: Computer ${computerScore} - ${humanScore} Human`)
    console.log("");
    if (humanScore == 3) {
        console.log("HUMAN WON !");
        console.log("");
    } else if (computerScore == 3) {
        console.log("COMPUTER WON !");
        console.log("");
    }
    
}
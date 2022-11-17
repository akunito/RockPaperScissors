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

function playRound(playerNum) {
    //console.log("player plays: " + playerNum);
    //const playerNum = playerSelection();
    const computerNum = getComputerChoice();

    switch(computerNum) {           // error in switch
        case 0:
            if (playerNum == 0) {
                alert("Computer've choosen 'Rock' and Human 'Rock' ");
                alert("THIS IS A DRAW !");
                return 0

            } else if (playerNum == 1) {
                alert("Computer've choosen 'Rock' and Human 'Paper' ");
                alert("HUMAN WINS !");
                return 2
                
            } else if (playerNum == 2) {
                alert("Computer've choosen 'Rock' and Human 'Scissors' ");
                alert("COMPUTER WINS !");
                return 1
                
            } else {
                alert("else in humanNum - input error?")
                return 0
            }
        case 1:
            if (playerNum == 0) {
                alert("Computer've choosen 'Paper' and Human 'Rock' ");
                alert("COMPUTER WINS !");
                return 1

            } else if (playerNum == 1) {
                alert("Computer've choosen 'Paper' and Human 'Paper' ");
                alert("THIS IS A DRAW !");
                return 0
                
            } else if (playerNum == 2) {
                alert("Computer've choosen 'Paper' and Human 'Scissors' ");
                alert("HUMAN WINS !");
                return 2
                
            } else {
                alert("else in humanNum - input error?")
                return 0
            }
        case 2:
            if (playerNum == 0) {
                alert("Computer've choosen 'Scissors' and Human 'Rock' ");
                alert("HUMAN WINS !");
                return 2

            } else if (playerNum == 1) {
                alert("Computer've choosen 'Scissors' and Human 'Paper' ");
                alert("COMPUTER WINS !");
                return 1
                
            } else if (playerNum == 2) {
                alert("Computer've choosen 'Scissors' and Human 'Scissors' ");
                alert("THIS IS A DRAW !");
                return 0
                
            } else {
                alert("else in humanNum - input error?")
                return 0
            }
        default:
            alert("computerNum error?")
            return 0
    }
    
}

let computerScore = 0;
let humanScore = 0;

const container = document.querySelector('#container')
const divScore = document.createElement('div');
divScore.classList.add('divScore');
divScore.textContent = `Computer ${computerScore} - ${humanScore} Human`;
divScore.style.fontSize = 24;
container.appendChild(divScore);

function updateScore(roundNum) {
  
    if (roundNum == 1){
        computerScore += 1
    } else if (roundNum == 2) {
        humanScore += 1
    } 
    console.log("-----------------------------------");
    
    divScore.innerText = `Computer ${computerScore} - ${humanScore} Human`;
}

function askPlayAgain() {
    let answer = prompt("Do you want to play again? (Y/N)");
    answer = answer.toLowerCase();
    if (answer == 'y'){
        humanScore = 0;
        computerScore = 0;
        divScore.innerText = `Computer ${computerScore} - ${humanScore} Human`;
        return 1;
    } if (answer == 'no' && answer == 'not' && answer == 'n') {
        humanScore = 0;
        computerScore = 0;
        divScore.innerText = `Computer ${computerScore} - ${humanScore} Human`;
        return 1;
    } else {
        return 0;
    }
}

// event listener > playround
const buttons = document.querySelectorAll('button');
const scoreToWin = 2;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //alert("You have chosen: " + button.textContent);
        
        //check score and rounds
        if (humanScore == scoreToWin) {
            alert("HUMAN WON !");
            let i = 0
            while (i == 0){i = askPlayAgain()};
        } else if (computerScore == scoreToWin) {
            alert("COMPUTER WON !");
            let i = 0
            while (i == 0){i = askPlayAgain()};
            };

        //play
        let roundNum = playRound(button.className);

        //Update Score
        updateScore(roundNum);
    });
});

//buttons.forEach(button => console.log(button.className));



/* //all loop to play by console before UI
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
*/
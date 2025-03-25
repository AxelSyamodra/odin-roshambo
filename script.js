function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    const choice = prompt('Enter your choice: ').toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        console.log('Invalid choice!');
    }
}

function playRound(computerChoice, humanChoice) {
    
    if (computerChoice === humanChoice) {
        return "It's a tie!";
    }
    else if (computerChoice === 'rock') {
        if (humanChoice === 'scissors') {
            return "Computer wins!";
        } else if (humanChoice === 'paper') {
            return "Human wins!";
        }
    }
    else if (computerChoice === 'paper') {
        if (humanChoice === 'rock') {
            return "Computer wins!";
        } else if (humanChoice === 'scissors') {
            return "Human wins!";
        }
    }
    else if (computerChoice === 'scissors') {
        if (humanChoice === 'paper') {
            return "Computer wins!";
        } else if (humanChoice === 'rock') {
            return "Human wins!";
        }
    }
}

function playGame () {
    let computerScore = 0;
    let humanScore = 0;

    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        console.log(`Round ${i + 1}`)
        console.log(`Human plays: ${humanChoice}`)
        console.log(`Computer plays: ${computerChoice}`)

        if (playRound(computerChoice, humanChoice) === "Computer wins!") {
            computerScore++
            console.log("Computer wins!")
        } else if (playRound(computerChoice, humanChoice) === "Human wins!") {
            humanScore++
            console.log("Human wins!")
        } else {
            console.log("It's a tie!")
        }

        console.log(`Human: ${humanScore}`)
        console.log(`Computer: ${computerScore}`)
    }
}





console.log(playGame())
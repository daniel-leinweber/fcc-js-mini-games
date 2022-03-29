const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const choices = document.querySelectorAll('button')

choices.forEach(button => button.addEventListener('click', (e) => {
    
    let userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    let computerChoice = getComputerChoice()
    computerChoiceDisplay.innerHTML = computerChoice

    let result = getResult(computerChoice, userChoice)
    resultDisplay.innerHTML = result

}))

function getComputerChoice() {

    const randomNumber = Math.floor(Math.random() * choices.length)
    return choices[randomNumber].id

}

function getResult(computerChoice, userChoice) {
    
    let output = "it's a draw!"

    if (computerChoice === 'rock' && userChoice == 'paper') {
        output = 'you win!'
    }
    else if (computerChoice === 'rock' && userChoice === 'scissors') {
        output = 'you lost!'
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        output = 'you win!'
    }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        output = 'you lost!'
    }
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        output = 'you win!'
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper') {
        output = 'you lost!'
    }

    return output

}
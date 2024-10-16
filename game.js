let randomNumber = parseInt((Math.random()*10)+1);

const submit = document.querySelector("#sub");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaiming = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultPress");
const lowOrb = document.querySelector(".lowOrb");

const p = document.createElement("p");

let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("TOO LOW! TRY AGAIN!")
    } else if (guess > 10) {
        alert("TOO HIGH! TRY AGAIN!")

    } else {

        previousGuesses.push(guess);

        if (numGuess === 11){
            displayGuesses(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber) {
        displayMessage("You guessed Correctly!");
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("TOO LOW! TRY AGAIN!")
    }else if (guess > randomNumber) {
        displayMessage("TOO HIGH! TRY AGAIN!")
    }
}
function displayGuesses(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    numGuesses++
    remaiming.innerHTML = `${11 - numGuesses} `;

}
function displayMessage(message){
    lowOrb.innerHTML = `<h1>${message}</h1>`
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h1 id="newGame">Start New Game</h1>`

    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
    const newGameButton = document.querySelector("newGame");
    newGameButton.addEventListener("click", function(){
        randomNumber = parseInt((Math.random()*10)+ 1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = "";
        lowOrb.innerHTML = "";
        remaiming.innerHTML = `${11 - numGuesses} `;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    })
}

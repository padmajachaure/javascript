const randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum);


const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const result = document.querySelector('.result');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let guessCount = 1;
let prevGusses = [];

let playGame = true;

if(playGame){
    submit.addEventListener('click ' , function(e) {
        e.preventDefault();
        let guesse = parseInt(input.value);
        console.log(guesse);
        validateGuess(guesse);
    });
}


function validateGuess(guesse) {
        if(isNaN(guesse) || guesse < 1 || guesse > 100) {
            displayMessage('Please enter a valid number between 1 and 100.');
            return;
        }else if(prevGusses.includes(guesse)) {
            displayMessage('You have already guessed that number. Try a different one.');
            return;
        } else {
            prevGusses.push(guesse);
            if(numGusses === 11){
                displayGuesses(guesse);
                displayMessage('Game Over! the number was ' + randomNum);
                endGame();
                return;
            }else {
                displayGuesses(guesse);
                checkGuess(guesse);
            }
            
        }
    }

function checkGuess(guesse) {
    if(guesse === randomNum) {
        displayMessage('Congratulations! You got it right!');
        endGame('You win!');
    } else if(guesse < randomNum) {
        displayMessage('Your guess is too low!');
        lowOrHi.textContent = 'Last guess was too low!';
    } else {
        displayMessage('Your guess is too high!');
        lowOrHi.textContent = 'Last guess was too high!';
    }
}

function displayGuesses(guesse) {
    input.value = '';
    guessSlot.innerHTML += ` ${guesse} `;
    guessCount++;
    input.focus();
    remaining.textContent = 11 - guessCount;
    
    if(guessCount === 11) {
        endGame('Game Over! The number was ' + randomNum);
    }
   
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;


}

function endGame(message) {
    //  
}

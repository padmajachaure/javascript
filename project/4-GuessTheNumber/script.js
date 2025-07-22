const randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum);


const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
// const result = document.querySelector('.result');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let guessCount = 1;
let prevGusses = [];
let maxGuesses = 10;

let playGame = true;

if(playGame){
    submit.addEventListener('click' , function(e) {
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
            if(guessCount === 10){
                displayGuesses(guesse);
                displayMessage('Game Over! the number was ' + randomNum);
                setGameOver();
                return;
            }else {
                displayGuesses(guesse);
                checkGuess(guesse);
            }
            
        }
    }
function checkGuess(guesse) {
    if (guesse === randomNum) {
        displayMessage('🎉 Congratulations! You got it right!');
        setGameOver();
    } else {
        if (guessCount === maxGuesses) {
            displayMessage(`💀 Game Over! The number was ${randomNum}`);
            setGameOver();
        } else {
            const hint = guesse < randomNum ? 'too low!' : 'too high!';
            displayMessage(`Your guess is ${hint}`);
            lowOrHi.textContent = `Last guess was ${hint}`;
        }
    }
}


function displayGuesses(guesse) {
    input.value = '';
    guessSlot.innerHTML += ` ${guesse}`;
    guessCount++;
    input.focus();
    remaining.textContent = maxGuesses - (guessCount - 1);
}


function displayMessage(message){
    lowOrHi.innerHTML= ` ${message} `;
}

function setGameOver() {
    input.disabled = true;
    submit.disabled = true;

    const resetButton = document.createElement('button');
    resetButton.textContent = '🔄 Start New Game';
    resetButton.setAttribute('id', 'reset');
    document.body.appendChild(resetButton);

    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    prevGusses = [];
    input.disabled = false;
    submit.disabled = false;
    input.value = '';
    guessSlot.textContent = '';
    remaining.textContent = maxGuesses;
    lowOrHi.textContent = '';
    displayMessage('');

    const resetBtn = document.getElementById('reset');
    if (resetBtn) resetBtn.remove();

    randomNum = parseInt(Math.random() * 100 + 1);
    console.log('New number:', randomNum);
}




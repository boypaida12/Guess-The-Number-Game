let randomNum = Math.floor(Math.random() * 100 + 1);
let tooClose = 5;
let play = document.getElementById('play');
let display = document.getElementById('display');
let restart = document.getElementById('restart');
let headingChange = document.getElementById('heading');
let instructionBtn = document.getElementById('instructionsBtn');
let instructionOverlay = document.getElementById('instructionsOverlay');
let instructions = document.getElementById('instructions');
let guessesRemaining = document.getElementById('guessesRemaining');
let totemOverlay = document.getElementById('totemOverlay');
let guessesLeft = 10;

instructionBtn.onclick = function() {
    instructionOverlay.style.display = 'block';
}

instructionOverlay.onclick = function() {
    instructionOverlay.style.display = 'none';
}


function guessTheNumber(event){
    event.preventDefault()
    let input = document.getElementById('input').value;
    input = parseInt(input);

    if(input === randomNum){
        display.innerHTML = 'You freed Purple Wiz!!🤩';
        headingChange.innerHTML ='Purple Wiz says Thank You!';
        document.body.classList.add('win'); 
        document.body.style.setProperty('--after-filter', '0%');
        document.querySelector('.totem-overlay').style.display = 'block';
        document.querySelector('.instructions-overlay').style.display = 'none'; 

    }else if(guessesLeft === 1){
        display.innerHTML = 'No More Guesses Left';
        document.body.style.setProperty('--after-filter', '100%');
        guessesRemaining.textContent = `Guesses Remaining: 0`;
    }
    else if(input < 1 || input > 100){
        display.innerHTML = "OUT OF RANGE 😒";
        document.body.style.setProperty('--after-filter', '100%');
    }else if(input < randomNum && (randomNum - input <= tooClose)) {
        display.innerHTML = 'Very close!, but you are a little low 😲';
        document.body.style.setProperty('--after-filter', '50%');
        guessesLeft--;
        guessesRemaining.textContent = `Guesses Remaining: ${guessesLeft}`;
    }else if(input < randomNum) {
        display.innerHTML = 'Too Low, Go Higher! 😮';
        document.body.style.setProperty('--after-filter', '90%');
        guessesLeft--;
        guessesRemaining.textContent = `Guesses Remaining: ${guessesLeft}`;
    }else if(input > randomNum && (input - randomNum <= tooClose)) {
        display.innerHTML = 'Very close!, but you are a little high 😲';
        document.body.style.setProperty('--after-filter', '50%');
        guessesLeft--;
        guessesRemaining.textContent = `Guesses Remaining: ${guessesLeft}`;
    }else if(input > randomNum) {
        display.innerHTML = 'Too High, Go Lower! 😮';
        document.body.style.setProperty('--after-filter', '90%');
        guessesLeft--;
        guessesRemaining.textContent = `Guesses Remaining: ${guessesLeft}`;
    }else {
        display.innerHTML = 'PLEASE USE ONLY NUMBERS! 💯'
    }
}

function restartGame(event) {
    event.preventDefault()
    randomNum = Math.floor(Math.random() * 100 + 1);
    document.body.classList.remove('win');
    document.body.style.setProperty('--after-filter', '100%');
}

   

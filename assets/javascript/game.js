$(document).ready(function() {

    var words = ["the godfather", "star wars", "indiana jones", "rocky", "the good the bad and the ugly", "jaws", "ghostbusters", "mission impossible", "back to the future", "superman"];
    var winTotal = 0;
    var lossTotal = 0;
    var playing = false;
    var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var currentChar = "";
    var randomNumber = -1;
    var currentWord = "";
    var guessesRemaining = 0;
    var lettersGuessed = [];
    var guessWord = [];
    var slotWord = [];
    var numberOfCorrectLetters = 0;
    var startMsgJ = document.getElementById("startMsgH");
    var winTotalJ = document.getElementById("winTotalH");
    var lossTotalJ = document.getElementById("lossTotalH");
    var guessWordJ = document.getElementById("guessWordH");
    var slotWordJ = document.getElementById("slotWordH");
    var guessesRemainingJ = document.getElementById("guessesRemainingH");
    var lettersGuessedJ = document.getElementById("lettersGuessedH");
    var bottomMsgJ = document.getElementById("bottomMsgH");


    document.onkeyup = function(event) {
        if (playing) {
            currentChar = event.key.toLowerCase();
            if (checkLetter(currentChar)) {
                if (checkNewLetter(currentChar)) {
                    updateGame();
                }
                else {
                    bottomMsgJ.textContent = "You already guessed that letter";
                }
            }
            else {
                bottomMsgJ.textContent = "That is not a letter";
            }
        }
        else {
            playing = true;
            resetGame();
        }
    }

    function resetGame() {
        randomNumber = Math.floor(Math.random() * 10);  
        currentWord = words[randomNumber];
        guessesRemaining = 15;
        lettersGuessed = ["none"];
        guessWord = [];
        slotWord = [];
        numberOfCorrectLetters = 0;
        
        console.log("currentWord = ",currentWord);

        for (var i = 0; i < currentWord.length; i++) {
            if (currentWord[i] == " "){
                slotWord.push("&nbsp");
                guessWord.push("&nbsp");
                numberOfCorrectLetters = numberOfCorrectLetters + 1;
            }
            else {
                slotWord.push("_ ");
                guessWord.push("&nbsp ");
            }
        }
        
        startMsgJ.textContent = "Select a letter";
        guessWordJ.innerHTML = guessWord.join("");
        slotWordJ.innerHTML = slotWord.join("");
        guessesRemainingJ.textContent = guessesRemaining;
        lettersGuessedJ.textContent = lettersGuessed;
        bottomMsgJ.textContent = "Good Luck";
    }

    function checkLetter(char) {
        var validLetter = false;
        for (var i = 0; i < 26; i++) {
            if (char == alpha[i]) {
                validLetter = true;
                return validLetter;
            }
        }
        return validLetter;
    }

    function checkNewLetter(char) {
        var newLetter = true;
        for (var i = 0; i < lettersGuessed.length; i++) {
            if (char == lettersGuessed[i]) {
                newLetter = false;
                return newLetter;
            }
        }
            return newLetter;
    }

    function checkCorrectLetter(char) {
        var correctLetter = false;
        for (var i = 0; i < currentWord.length; i++) {
            if (char == currentWord.charAt(i)) {
                guessWord[i] = char + " ";
                numberOfCorrectLetters = numberOfCorrectLetters + 1;
                correctLetter = true;
            }
        }
        return correctLetter;
    }

    function updateGame() {
        if (guessesRemaining == 15) {
            lettersGuessed = [];
        }

        lettersGuessed.push(currentChar);
        guessesRemaining = guessesRemaining - 1;
        guessesRemainingJ.textContent = guessesRemaining;
        lettersGuessedJ.textContent = lettersGuessed.join(" ");

        if (checkCorrectLetter(currentChar)) {
            guessWordJ.innerHTML = guessWord.join("");
            if (numberOfCorrectLetters == currentWord.length) {
                win();
            }
            else
                if (guessesRemaining == 0) {
                    lose();
                }
                else{
                    bottomMsgJ.textContent = "Good one";
                }
        }
        else {
            if (guessesRemaining == 0) {
                lose();
            }
            else{
                bottomMsgJ.textContent = "Not quite";
            }
        }
    }

    function win() {
        winTotal = winTotal + 1;
        startMsgJ.textContent = "Select any key to start a new game";
        winTotalJ.textContent = winTotal;
        bottomMsgJ.textContent = "Congratulations!  You won!";

        playing = false;
    }

    function lose() {
        lossTotal = lossTotal + 1;
        startMsgJ.textContent = "Select any key to start a new game";
        lossTotalJ.textContent = lossTotal;
        bottomMsgJ.textContent = "Bummer!  You lost!";

        playing = false;
    }

})
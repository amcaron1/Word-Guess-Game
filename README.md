# Word-Guess-Game
<body>
    <h1>Welcome to Movie Hangman</h1>
    <h1 id="startMsgH">Select any key to start a new game.</h1>
    <h1 id="winsBannerH">Wins</h1>
    <h1 id="winTotalH">0</h1>
    <h1 id= movieBannerH>Movie Name</h1>
    <h1 id="geussWordH">""</h1>
    <h1 id="slotWordH">""</h1>
    <h1 id="guessBannerH">Number of Guesses Remaining</h1>
    <h1 id="geussesRemainingH">0</h1>
    <h1 id="lettersBannerH">Letters Previously Guessed</h1>
    <h1 id="lettersGeussedH">""</h1>
    <h1 id="endGameMsgH">""</h1>

<script>

    var words["the godfather", "star wars", "indiana jones", "rocky", "the good the bad and the ugly",
        "jaws", "ghostbusters", "mission impossible", "back to the future", "superman"];
    var winTotal = 0;
    var playing = false;
    var alpha[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];

    var currentChar = "";
    var randomNumber = -1;
    var currentWord = "";
    var guessesRemaining = 0;
    var lettersGuessed[] = [];
    var guessWord[] = [];
    var slotWord[] = [];
    var numberOfCorrectLetters = 0;

    var startMsgJ = document.getElementById("startMsgH");
    var winTotalJ = document.getElementByID("winTotalH");
    var guessWordJ = document.getElementByID("geussWordH");
    var slotWordJ = document.getElementByID("slotWWordH");
    var guessesRemainingJ = document.getElementByID("geussesRemainingH");
    var lettersGeussedJ = document.getElementByID("lettersGeussedH");
    var endGameMsgJ = document.getElementByID("endGameMsgH");


    document.onkeyup = function(event) {
        if (playing) {
            currentChar = event.key.toLowerCase;
            if (checkLetter(currentChar)) {
                if (checkNewLetter(currentChar)) {
                    updateGame();
                }
                else {
                    Display "You already guessed that letter"
                }
            }
            else {
                Display "That is not a letter"
            }
        }
        else {
            playing = true;
            resetGame();
        }
    }

    function resetGame() {
        randomNumber = Math.floor((Math.random() * 10) + 1); 
        currentWord = words[randomNumber];
        guessesRemaining = 10;
        lettersGuessed[] = [];
        guessWord[] = [];
        slotWord[] = [];
        numberOfCorrectLetters = 0;

        for (var i = 0; i < currentWord.length; i++) {
            if (currentWord[i] == " "){
                slotWord.push(" ");
                numberOfCorrectLetters = numberOfCorrectLetters + 1;
            }
            else {
                slots.push("_");
            }
            guessWord.push(" ");
        }
    
        startMsgJ.textContent = "Select a letter.";
        winTotalJ.textContent = winTotal;
        geussWordJ.textContent = 
        slotWordJ.textContent =
        geussesRemainingJ.textContent = guessesRemaining;
        lettersGuessedJ.text.Content = 
        endGameMsgJ.textContent = "";
    }

    function checkLetter(currentChar) {
    var i = 0;
    var validLetter = true;
    while(validLetter && i < 26) {
        if (currentChar == alpha[i]) {
            validLetter = false;
        }
        else {
            i = i + 1;
        }
    }
    return validLetter;
    }

    function checkNewLetter(currentChar) {
        var i = 0;
        var newLetter = true;
        while (newLetter && i < lettersGuessed.length) {
            if (currentChar == lettersGuessed[i]) {
                newLetter = false;
            }
            else {
                i = i + 1;
            }
        }
        return newLetter;
    }

    function checkCorrectLetter() {
        var i = 0;
        var correctLetter = false;
        for (var i = 0; i < currentWord.length, i++) {
            if (currentChar == currentWord.charAt(i)) {
                guessWord[i] = currentChar;
                numberOfCorrectLetters = numberOfCorrectLetters + 1;
                correctLetter = true;
            }
        }
        return correctLetter;
    }

    function updateGame() {
        guessesRemaining = guessesRemaining - 1;
        lettersGuessed.push(currentChar);
        if (checkCorrectLetter()) {
            if (numberOfCorrectLetters == currentWord.length) {
                win();
            }
            else
                if (guessesRemaining == 0) {
                    lose();
                }
                else{
                    geussesRemainingJ.textContent = guessesRemaining;
                    letterGeussedJ.text.Content = 
                }
        }
        else {
            if (guessesRemaining == 0) {
                lose();
            }
            else{
                geussesRemainingJ.textContent = guessesRemaining;
                letterGeussedJ.text.Content = 
            }
        }
    }

    function win() {
        winTotal = winTotal + 1;
        startMsgJ.textContent = "Select any key to start a new game.";
        winTotalJ.textContent = winTotal;
        geussWordJ.textContent = 
        geussesRemainingJ.textContent = guessesRemaining;
        lettersGuessedJ.text.Content = 
        endGameMsgJ.textContent = "Congratulations!  You won!";

        playing = false;
    }

    function lose() {
        startMsgJ.textContent = "Select any key to start a new game.";
        geussesRemainingJ.textContent = guessesRemaining;
        lettersGeussedJ.text.Content = 
        endGameMsgJ.textContent = "Bummer.  You lost.";

        playing = false;
    }
</script>
</body>
</html>

            
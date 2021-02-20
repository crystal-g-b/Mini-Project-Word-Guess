var startBtn = document.querySelector(".startbutton");
var guessEl = document.querySelector("#guess");
var winEl = document.querySelector("#wincount");
var lossEl = document.querySelector("#losscount");
var resetBtn = document.querySelector(".reset");
var timerEL = document.querySelector("#timer");

var activeWord;
var timer;
var wins = 0;
var losses = 0;

var wordsArray = ["house", "party", "swim", "singing", "stop"];
startBtn.addEventListener("click" , startGame);


function startGame() {
    console.log("hello world")
    var userGuess = [];
    var correctAnswer = [];
    var randomNum = Math.floor(Math.random() * wordsArray.length);
    activeWord = wordsArray[randomNum];

    var guess = activeWord.split("");
    
    for (var i = 0; i < guess.length; i++) {
        guess[i] = "_ ";
    };

    guess = guess.join("");
    console.log(guess);
   

};
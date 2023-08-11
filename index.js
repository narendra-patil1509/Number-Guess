let computerGuess; //for guess number
let userGuess = []; //for store previous number which entered for guessing
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio();


const init = ()=> {
    computerGuess = Math.floor(Math.random()*100);
    // console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
};

const startGame = ()=>{
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

//reload the page
const newGameBegin = ()=> {
    audio.play();
    window.location.reload();
}

//start New Game

const startNewGame = ()=> {
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled",true);
}
//Main logic of our app
const compareGuess = ()=>{ //number getting from user and displaying it
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess,userNumber]; //(spread operator)for number of previous guesses number adding , by ,
    document.getElementById("guesses").innerHTML = userGuess;
    
    //check the value low or high
   
        if(userGuess.length < maxGuess) {
            if(userNumber>computerGuess) {
                userGuessUpdate.innerHTML = "Your guess is High 😲";
                userNumberUpdate.value = "";
            }
            else if(userNumber<computerGuess) {
                userGuessUpdate.innerHTML = "Your guess is Low 😲";
                userNumberUpdate.value = "";
            }
            else {
                userGuessUpdate.innerHTML = "It's Correct 😎";
                userNumberUpdate.value = "";
            }
        }
        else {
            if(userNumber>computerGuess) {
                userGuessUpdate.innerHTML = `You loose correct number was ${computerGuess}`;
                userNumberUpdate.value = "";
                startNewGame();
            }
            else if(userNumber<computerGuess) {
                userGuessUpdate.innerHTML = `You loose correct number was ${computerGuess}`;
                userNumberUpdate.value = "";
                startNewGame();
            }
            else {
                userGuessUpdate.innerHTML = "It's Correct 😎";
                userNumberUpdate.value = "";
                startNewGame();
            }
        }
        document.getElementById("attempts").innerHTML = userGuess.length;
};
const easyMode = ()=>{
    audio.play();
    maxGuess = 10; //for easy mode number of attempts
    startGame();
}

const hardMode = ()=>{
    audio.play();
    maxGuess = 5; //for easy mode number of attempts
    startGame();
}
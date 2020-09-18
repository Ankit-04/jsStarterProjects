const button = document.getElementById('submit');
var randNum = Math.floor(Math.random()*100)
var counter = 10;
var guess = "";
var prevGuesses = "You've Guessed:"

function main(){
    guess = document.getElementById("guess").value;
    if (--counter == 0 ){
        document.getElementById("Banner").innerHTML = "You Lose Dun dun dun. The number was "+randNum
        gameOver();
    }
    document.getElementById("guessesLeft").innerHTML = "guesses left: "+counter;
    
    if (guess > randNum){
        document.getElementById("hint").innerHTML = "your guess was to high"
    }
    else if(guess<randNum){
        document.getElementById("hint").innerHTML = "your guess was too low"
    }
    else{
        document.getElementById("Banner").innerHTML = "You Win Congrats!"
        gameOver()
    }
    prevGuesses += guess + " ";
    document.getElementById("guesses").innerHTML = prevGuesses
}
function gameOver(){
    button.disabled = true;
    document.getElementById("newGame").style.display = "inline";
}

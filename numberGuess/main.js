var randNum = Math.floor(Math.random()*100)
console.log(randNum);
var counter = 10;
var guess = ""
function main(){
    guess = document.getElementById("guess").value;
    if (--counter == 0 ){
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
        alert("you guessed it");
        gameOver();
    }
}
function gameOver(){
    console.log(gameOver)
}
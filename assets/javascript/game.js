var options = ['r','p','s'];
	var wins = 0;
	var losses = 0;
    var guessesLeft -= 10;
    var lettersGuessed

document.onkeyup = function(event) {

	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	
	console.log(userGuess);

	
	var computerGuess = options[Math.floor(Math.random()*options.length)];

	console.log(computerGuess);

	

	
	console.log("The Computer Guessed: " + computerGuess);

	if (userGuess == computerGuess) {
		console.log("Win!");
		wins ++;
	}

	else (userGuess != computerGuess) {
       
        console.log("Win!");
        wins ++;
    }


document.getElementById("wins").innerHTML= wins;
document.getElementById("losses").innerHTML= losses;


}
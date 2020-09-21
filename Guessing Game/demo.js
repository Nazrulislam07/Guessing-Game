

var secretNumber = 15;

var guess = Number(prompt("What is your guessing number?"));

// upore aksathe String k Number a convert na kare alada vabe convert kara jai. just good to know
/*
var stringGuess = prompt("What is your guessing number?");
var guess = Number(stringGuess);
*/

// check if guess is right
if (guess === secretNumber){
	alert("Yay you got it right!")
}

// check if guess is higher 
else if(guess > secretNumber){
	//alert("Too high, guess again");
	var guess = Number(prompt("This is too high, try again"));

}
// check if lower
else{
	//alert("Too low, guess again");
	var guess = Number(prompt("This is too low, try again"));
}

// ai exercise a alert die kara hoese lecture a but alert die karle every singl time page refresh karte hoi
// tai ami akhane alert commetn kare dai, until conrret number na dea parjonto code run karte thakbe refresh karte hobena.
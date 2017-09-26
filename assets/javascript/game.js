$(document).ready(function() {

var targetScore;
var winScore;
var loseScore;
var currentScore;

var messageElement = $("#message");
var winScoreElement = $("#winScore");
var loseScoreElement = $("#loseScore");
var currentScoreElement = $("#currentScore");
var targetScoreElement = $("#targetScore");
var buttonElements = $("button.random-number");



function randomNumber(max, min) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function initiallize() {
	winScore = 0;
	loseScore = 0;
	reset();

	messageElement.text("");
	winScoreElement.text("Wins: " + winScore);
	loseScoreElement.text("Loses " + loseScore);

}

function reset() {
	targetScore = randomNumber(120, 19);
	currentScore = 0;

	targetScoreElement.text(targetScore);
	currentScoreElement.text(currentScore);

	var numbers = []

	for (var i = 0; i < buttonElements.length ; i++) {
		numbers.push(randomNumber(12, 1));
	}

	numbers[Math.floor(Math.random() * numbers.length)] = 1;
	console.log(numbers)



	for (var i = 0; i < buttonElements.length ; i++) {
		$(buttonElements[i]).val(numbers[i]);
	}
}
/*
<button value="randomNumber"/>
Delegate other functions to handle state separately.
Only determine what conditions determine a state.
*/
function clickRandomNumberButton() {
	var buttonRandomNumber = parseInt(this.value);
		inGame(buttonRandomNumber);
	if (isWon()) {
		win();
	} else if (isLost()) {
		lose();

	}// else { // in game
	// 	var buttonRandomNumber = parseInt(this.value);
	// 	inGame(buttonRandomNumber);
	// }
}

function isLost() {
	return currentScore >= targetScore;
}

function isWon() {
	return currentScore === targetScore;
}

function inGame(buttonRandomNumber) {
	currentScore += buttonRandomNumber;
	currentScoreElement.text(currentScore);
}

function win() {
	winScore++;
	reset();

	messageElement.text("You won");
	winScoreElement.text("Wins: " + winScore);
}

function lose() {
	loseScore++;
	reset();

	messageElement.text("You lost");
	loseScoreElement.text("Loses " + loseScore);
}

$(buttonElements).on("click", clickRandomNumberButton);
initiallize();

});
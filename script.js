'use strict';

let secretNumber= Math.trunc(Math.random()*21);
let score = 20;
let highscore = 0;

	document.querySelector(".check").addEventListener('click', function(){
	const guess = Number(document.querySelector('.guess').value)
	let displayMessage = (message) => {
		document.querySelector(".message").textContent = message
	}

	//when there is no input

	if (!guess){
		displayMessage("No number!!!")

	//when player wins

} else if (guess === secretNumber) {
	displayMessage("✌ Correct Number!!")

	document.querySelector('body').style.backgroundColor = '#60b347';
	document.querySelector(".number").style.width = '30rem';
	document.querySelector(".number").textContent = secretNumber;

		if(score > highscore){
			highscore = score;
			document.querySelector('.highscore').textContent = highscore
		}

	//when the guess is not equal
}else if (guess !==secretNumber) {

	if(score > 1){
	displayMessage(guess > secretNumber ? "Too high!!" : "Too Low")
	score--;
	document.querySelector(".score").textContent = score;
	} else {
		 displayMessage('You lost the game!!!')
		document.querySelector(".score").textContent = 0;
		}
	}
})

document.querySelector(".again").addEventListener('click', function(){
	score = 20;
	secretNumber= Math.trunc(Math.random()*21);
	displayMessage("Start guessing...")
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";
	document.querySelector('.guess').value="";
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector(".number").style.width = '15rem';
})


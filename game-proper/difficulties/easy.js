const usernameNumber = parseInt(localStorage.getItem('amountOfUsernames') || '0');
const currentUsername = localStorage.getItem('username' + (usernameNumber - 1));

window.onload = function(){
	let storedUsername = localStorage.getItem('username' + (usernameNumber - 1));
	if (storedUsername) {
		let greeting = document.getElementById('greeting');
		let usernameInput = document.getElementById('username');
		let playButton = document.getElementById('playButton');
		let playerName = document.getElementById('player-name');

		if (greeting) {
			greeting.innerHTML = 'Welcome, ' + storedUsername + '.';
		}
		if (usernameInput) {
			usernameInput.value = storedUsername;
		}
		if (playButton) {
			playButton.disabled = false;
		}
		if (playerName) {
			playerName.innerHTML = storedUsername;
		}
	}
	
	const boxContainer = document.getElementById("boxContainer");
	const scoreDisplay = document.getElementById("score");
	let score = 0;

	function getRandomColor() {
	  const r = Math.floor(Math.random() * 256);
	  const g = Math.floor(Math.random() * 256);
	  const b = Math.floor(Math.random() * 256);
	  return `rgb(${r}, ${g}, ${b})`;
	}

	function createGame() {
	  boxContainer.innerHTML = "";
	  const baseColor = getRandomColor();
	  let differentColor;

	  do {
		differentColor = getRandomColor();
	  } while (differentColor === baseColor);

	  const differentIndex = Math.floor(Math.random() * 4);

	  for (let i = 0; i < 4; i++) {
		const box = document.createElement("div");
		box.classList.add("color-box");
		box.style.backgroundColor = (i === differentIndex) ? differentColor : baseColor;
		box.addEventListener("click", () => {
		  if (i === differentIndex) {
			score++;
		  } else {
			localStorage.setItem(currentUsername, score);
			let highScore = -1;
					let highScoreUser = '';

					for (let j = 0; j < usernameNumber; j++) {
						let user = localStorage.getItem('username' + j);
						let userScore = parseInt(localStorage.getItem(user) || '0');

						if (userScore > highScore) {
							highScore = userScore;
							highScoreUser = user;
							
							localStorage.setItem('highScore', highScore);
							localStorage.setItem('highScoreUser', highScoreUser);
						}
					}
			alert("You lost! Redirecting back to game page...")
			window.location.href = "../game.html";
		}
		  scoreDisplay.textContent = `Score: ${score}`;
		  createGame();
		});
		boxContainer.appendChild(box);
	  }
	}

	createGame();
}

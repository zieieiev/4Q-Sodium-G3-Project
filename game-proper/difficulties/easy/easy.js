const usernameNumber = parseInt(localStorage.getItem('amountOfUsernames') || '0');
const currentUsername = localStorage.getItem('username' + (usernameNumber - 1));

window.onload = function() {
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
	let colorValues = [];

    function getRandomColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        colorValues = [r, g, b];
		return colorValues;
    }
	
	function getDifferentColor(base, offset) {
        let modificationValue = Math.floor(Math.random()*3);
		const modified = [base[0], base[1], base[2]];
		modified[modificationValue] = Math.min(255, modified[modificationValue] + offset);
		return modified;
    }

function createGame() {
	boxContainer.innerHTML = "";
	
	const baseColor = getRandomColor();
	const differentColor = getDifferentColor(baseColor, 150); 
	
	const differentIndex = Math.floor(Math.random() * 4);

	for (let i = 0; i < 4; i++) {
		const box = document.createElement("div");
		box.classList.add("color-box");
		const color = (i === differentIndex ? differentColor : baseColor);
		box.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;	

		box.addEventListener("click", () => {
			if (i === differentIndex) {
				score++;
			} else {
				localStorage.setItem('currentUsername', currentUsername);
				localStorage.setItem('currentScore', score);
				let highScore = parseInt(localStorage.getItem('highScore') || '0');
				let highScoreUser = localStorage.getItem('highScoreUser') || '';

				if (score > highScore) {
					highScore = score;
					highScoreUser = currentUsername;
					localStorage.setItem('highScore', highScore);
					localStorage.setItem('highScoreUser', highScoreUser);
				}

				alert("You lost! Redirecting back to game page...");
				window.location.href = "../../game.html";
				return;
			}
			scoreDisplay.textContent = `Score: ${score}`;
			createGame();  
		});

		boxContainer.appendChild(box);
	}
    }

    createGame();
};

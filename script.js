var usernameNumber = parseInt(localStorage.getItem('amountOfUsernames') || '0');

window.onload = function loadData() {
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
}

function enterName(){
	let nameOfUser = document.getElementById('username').value;
	let startButton = document.getElementById('playButton');
	
	if (nameOfUser === ""){
		document.getElementById('greeting').innerHTML = 'Please enter a username!';
		startButton.disabled = true;
	} else{
		if (!isValidUsername(nameOfUser)){
			document.getElementById('greeting').innerHTML = 'Invalid username!';
			document.getElementById('subtext').innerHTML = 'Username should ONLY contain letters and/or numbers.';
			startButton.disabled = true;
		} else {
			document.getElementById('greeting').innerHTML = 'Welcome, ' + nameOfUser + '.';
			document.getElementById('subtext').innerHTML = 'Enter username: ';
			startButton.disabled = false;
			localStorage.setItem('username' + usernameNumber, nameOfUser);
			
			usernameNumber++;
			localStorage.setItem('amountOfUsernames', usernameNumber);
		}
	} 
	return false;				
}

function isValidUsername(username){
	return /^[a-zA-Z0-9]+$/.test(username);
} 

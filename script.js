window.onload = function() {
	let storedUsername = localStorage.getItem('username');
	if (storedUsername) {
		document.getElementById('result').innerHTML = 'Welcome, ' + storedUsername + '.';
		document.getElementById('username').value = storedUsername;
		document.getElementById('playButton').disabled = false;
		document.getElementById('player-name').innerHTML = storedUsername;
	}
}
			
function enterName(){
	let nameOfUser = document.getElementById('username').value;
	let startButton = document.getElementById('playButton');
	
	if (nameOfUser === ""){
		document.getElementById('result').innerHTML = 'Please enter a username!';
		startButton.disabled = true;
	} else{
		if (!isValidUsername(nameOfUser)){
			document.getElementById('result').innerHTML = 'Invalid username!';
			document.getElementById('subtext').innerHTML = 'Username should ONLY contain letters and/or numbers.';
			startButton.disabled = true;
		} else {
			document.getElementById('result').innerHTML = 'Welcome, ' + nameOfUser + '.';
			document.getElementById('subtext').innerHTML = 'Enter username: ';
			startButton.disabled = false;
			localStorage.setItem('username', nameOfUser);
			
			const playerNameElement = document.getElementById('player-name');
			if (playerNameElement) {
				playerNameElement.innerHTML = nameOfUser;
			}
		}
	} 
	return false;				
}

function isValidUsername(username){
	return /^[a-zA-Z0-9]+$/.test(username);
}
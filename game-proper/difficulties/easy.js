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
		alert("✅ Correct! +1 point");
	  } else {
		alert("❌ Wrong! Try again.");
	  }
	  scoreDisplay.textContent = `Score: ${score}`;
	  createGame();
	});
	boxContainer.appendChild(box);
  }
}

createGame();

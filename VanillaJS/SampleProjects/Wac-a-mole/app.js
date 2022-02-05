const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.getElementById("time-left");

let moleTimerId = null;
let timerId = setInterval(countDown, 1000);
let score = document.getElementById("score");
let result = 0;
let currentTime = 60;
timeLeft.textContent = currentTime;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  //assign the id of the randomPosition to the hitPosition
  hitPosition = randomPosition.id;
}

squares.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

function moveMole() {
  moleTimerId = setInterval(randomSquare, 1000);
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    clearInterval(moleTimerId);
    timeLeft.textContent = `GAME OVER!! Your finale score is: ${result}`;
  }
}

moveMole();

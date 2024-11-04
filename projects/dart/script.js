var points = 0;
var mult = 1;
var dartpath = document.getElementById("dartdiv").style;
var elapsedTime = 0;
var altMove = 0;

/*
zegar dla sprawdzania rozmiaru okna + zmiany pozycji darta
później inne efekty
*/
//timer - seconds
var timerS = setInterval(function () {
  moveDartboard();
  sizeCheck();
}, 1000);
//timer - milliseconds
var timerMS = setInterval(function () {
  document.getElementById("timer").innerHTML = elapsedTime / 10 + "s";
  elapsedTime++;
}, 100);

//funkcja dodawania punktów, nazywa się blat bo masz counter [nazwa nadana przez koszelnika]
function blat(spot, ...special) {
  if (special[0] != null) {
    mult = special[0] == "d" ? 2 : 3;
    mult == 2;
  }
  switch (spot) {
    case "bull":
      points += 50;
      break;
    case "center":
      points += 25;
      break;
    default:
      points += spot * mult;
      break;
  }
  score.innerHTML = "Score: " + points;
  mult = 1;
  difficulty_up(points);
  if (points >= 301) {
    bigWin();
  }
}

//fajne powiadomienia żeby ekscytowali się, może rzucę efekty wizualne dla tego czy coś. (triple by miało więcej efektów).
function bigWin() {
  var winMessages = ["winner", "congrattation"];
  alert(
    winMessages[Math.floor(Math.random() * winMessages.length)] +
      " " +
      elapsedTime / 10 +
      "s"
  );
  points = 0;
  clearInterval(timerS);
  clearInterval(timerMS);
}

function difficulty_up(points) {}

async function moveDartboard() {
  var targetCoords = randomCoords();

  dartpath.setProperty("--targetX", targetCoords[0]);
  dartpath.setProperty("--targetY", targetCoords[1]);

  curCoords = getCoords();

  dartpath.setProperty("--curX", curCoords[0]);
  dartpath.setProperty("--curY", curCoords[1]);

  dartpath.animation = "move" + "0" + " 0.3s ease-in 0ms 1 normal forwards";

  await new Promise((r) => setTimeout(r, 500));
  dartpath.left = targetCoords[0];
  dartpath.top = targetCoords[1];
  dartpath.animation = "";
}

function randomCoords() {
  targetX = Math.floor(Math.random() * (window.innerWidth - 500)) + "px";
  targetY = Math.floor(Math.random() * (window.innerHeight - 500)) + "px";
  var targetCoords = [targetX, targetY];
  return targetCoords;
}

function getCoords() {
  coordsX =
    document.getElementById("dartdiv").getBoundingClientRect().left + "px";
  coordsY =
    document.getElementById("dartdiv").getBoundingClientRect().top + "px";

  coords = [coordsX, coordsY];

  dartPosition.innerHTML = "dartdiv position x:" + coordsX + "| y:" + coordsY;

  return coords;
}

//sprawdź rozmiar okna
function sizeCheck() {
  windowSize.innerHTML =
    "windowsize x:" + window.innerWidth + "| y:" + window.innerHeight;
}

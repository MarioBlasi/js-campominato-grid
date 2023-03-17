// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed
// emetto un messaggio in console con il numero della cella cliccata.

const container = document.querySelector(".container-main");

const button = document.getElementById("crea-griglia");
const playButton = document.getElementById("play");
const griglia = document.getElementById("griglia");

let gameStarted = false;

let nMax = 100;

// Funzione che avvia il gioco
function startGame() {
  console.log("starGame");
}

for (let i = 1; i <= nMax; i++) {
  const cell = `<div class="cell">${i}</div>`;
  container.innerHTML += cell;
}

const cellEl = document.querySelectorAll(".cell");

for (let i = 0; i < cellEl.length; i++) {
  const thisCell = cellEl[i];
  console.log(thisCell);
  thisCell.addEventListener("click", function () {
    thisCell.classList.toggle("bg_blue");
    console.log("Changed the color" + thisCell.textContent);
  });
}

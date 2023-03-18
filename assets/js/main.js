// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed
// emetto un messaggio in console con il numero della cella cliccata.

// const button = document.getElementById("crea-griglia");
// const playButton = document.getElementById("play");
// const griglia = document.getElementById("griglia");

const container = document.querySelector(".container-main");

let nMax = 100;

for (let i = 1; i <= nMax; i++) {
  const cell = `<div class="cell">${i}</div>`;
  container.innerHTML += cell;
}

const cellEl = document.querySelectorAll(".cell");

function startGame() {
  for (let i = 0; i < cellEl.length; i++) {
    const thisCell = cellEl[i];
    console.log(thisCell);
    thisCell.addEventListener("click", function () {
      thisCell.classList.toggle("bg_blue");
      console.log("Changed the color" + thisCell.textContent);
    });
  }
}
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", startGame);

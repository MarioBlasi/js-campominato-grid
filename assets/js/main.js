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

/*Bonus
Aggiungere una select accanto al bottone di generazione, 
che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100,
 divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81,
 divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, 
divise in 7 caselle per 7 righe;*/

//------------//
/*per aggiungere la selezione livello di difficoltá utilizziamo in HTML
  un menu a discesa (bootstrap) */

/* utiliziamo un function per generare il gioco 
   - utilizzando if else per assegnare i valori*/

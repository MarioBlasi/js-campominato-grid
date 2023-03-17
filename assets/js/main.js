// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed
// emetto un messaggio in console con il numero della cella cliccata.

/* Creare una griglia 10x10

 Ogni volta che clicco su un quadrato si colora di azzurro */

// Creo una variabile dove salvo il container delle 100 celle (container-grid)

const container = document.querySelector(".container-main");

// creo un max numero di celle

let nMax = 100;
// creo un ciclo n volte per le celle (dove n in questo caso sta per 100)

for (let i = 1; i <= nMax; i++) {
  // aggiungendo  la variabile ${i} numereremo le celle progressivamente
  const cell = `<div class="cell">${i}</div>`;
  container.innerHTML += cell;
}

// seleziono una cella che ha classe cell e active

const cellEl = document.querySelectorAll(".cell");

// aggiungo eventlisner per la classe active ciclando per la lunghezza dell'array cellEl
for (let i = 0; i < cellEl.length; i++) {
  const thisCell = cellEl[i];
  console.log(thisCell);
  thisCell.addEventListener("click", function () {
    thisCell.classList.toggle("bg_blue");
    // this.classList.add("active")
    //AGGIUNGIAMO textContent per impostare il testo interno della cella.
    console.log("Changed the color" + thisCell.textContent);
  });
}

// +++ esercizio 1 +++

// function firstLastCheck(array) {
//     // due contatori: uno parte dall'inizio e uno dalla fine
//     let i = 0;
//     let j = (array.length - 1);
//     while (i < array.length) {
//         if (array[i] == " ") { //ignoriamo gli spazi
//             i++;
//         }
//         if (array[j] == " ") { //ignoriamo gli spazi
//             j--;
//         }
//         if (array[i] != array[j]) { //alla prima lettera diversa esce dalla funzione
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
// }

// const word = prompt("Inserisci una parola: ");
// if (firstLastCheck(word)) {
//     console.log(word + " è palindroma");
// } else {
//     console.log(word + " non è palindroma");
// }


// +++ esercizio 2 +++

const choose = prompt("Pari o dispari?"); //scelta giocatore
console.log("Hai scelto " + choose);
const inputNumber = parseInt(prompt("Inserisci un numero: ")); //numero in input
console.log("Il tuo numero è " + inputNumber);
const pcNumber = getRandom(5); //numero del computer
console.log("Il numero del computer è " + pcNumber);
const somma = pcNumber + inputNumber; //somma dei numeri
console.log("La somma è " + somma);
// stampa risultato
if ((choose == "pari" && isEven(somma)) || (choose == "dispari" && !isEven(somma))) {
// SE il giocatore SCEGLIE "pari" e la funzione èPari è VERA OPPURE SE il giocatore SCEGLIE "dispari" e la funzone èPari è NONVERA
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}

// funzioni

// funzione per il numero random
function getRandom(num) {
    return Math.floor(Math.random() * num) + 1;
}
// funzione per pari o dispari
function isEven(num) {
    return (num % 2 == 0);
}
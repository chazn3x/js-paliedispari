// +++ esercizio 1 +++

function firstLastCheck(array) {
    // due contatori: uno parte dall'inizio e uno dalla fine
    let i = 0;
    let j = (array.length - 1);
    while (i < array.length) {
        if (array[i] == " ") { //ignoriamo gli spazi
            i++;
        }
        if (array[j] == " ") { //ignoriamo gli spazi
            j--;
        }
        if (array[i] != array[j]) { //alla prima lettera diversa esce dalla funzione
            return false;
        }
        i++;
        j--;
    }
    return true;
}

const word = prompt("Inserisci una parola: ");
if (firstLastCheck(word)) {
    console.log(word + " è palindroma");
} else {
    console.log(word + " non è palindroma");
}
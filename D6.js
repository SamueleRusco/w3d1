/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
console.log(`---ESERCIZIO 1---`);
/* SCRIVI QUI LA TUA RISPOSTA */
const l1 = 12;
const l2 = 23;

function AreaRettangolo(x, y) {
  const risultato = x * y;
  return risultato;
}
const sommaDuePiuDue = AreaRettangolo(l1, l2);
console.log(sommaDuePiuDue);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo
 deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log(`---ESERCIZIO 2---`);
/* SCRIVI QUI LA TUA RISPOSTA */
const numero1 = 23;
const numero2 = 23;

function crazySum(x, y) {
  if (x === y) {
    return (risultato = (x + y) * 3);
  } else {
    const risultato = x + y;
    return risultato;
  }
}
const esercizioDue = crazySum(numero1, numero2);
console.log(esercizioDue);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza
 assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log(`---ESERCIZIO 3---`);
/* SCRIVI QUI LA TUA RISPOSTA */
let es3val1 = 19;
let es3val2 = 190;
function crazyDiff(x, y) {
  if (y > 19) {
    return Math.abs((x - y) * 3);
  } else {
    return Math.abs(x - y);
  }
}

const esercizio3 = crazyDiff(es3val1, es3val2);
console.log(esercizio3);
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log(`---ESERCIZIO 4---`);
/* SCRIVI QUI LA TUA RISPOSTA */
const numeroEs4 = 399;
function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return (risultato = true);
  } else {
    return (risultato = false);
  }
}
const esercizio4 = boundary(numeroEs4);
console.log(esercizio4);
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log(`---ESERCIZIO 5---`);
/* SCRIVI QUI LA TUA RISPOSTA */
const es5 = `EPICODE`;

function epify(n) {
  if (n === `EPICODE`) {
    return (risultato = es5);
  } else {
    return (risultato = `EPICODE ` + es5);
  }
}
const esercizio5 = epify(es5);
console.log(esercizio5);
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log(`---ESERCIZIO 6---`);

const es6 = 32155145456;
/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(n) {
  if (n < 0) {
    return `inserisci un numero positivo grazie`;
  }
  if (n % 3 === 0 && n % 7 === 0) {
    return `il numero è multiplo sia di 3 che di 7`;
  }
  if (n % 3 === 0) {
    return `il numero è un multiplo di 3`;
  }
  if (n % 7 === 0) {
    return `il numero è un multiplo di 7`;
  } else {
    return `questo numero non va bene`;
  }
}

const esercizio6 = check3and7(es6);
console.log(esercizio6);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log(`---ESERCIZIO 7---`);
/* SCRIVI QUI LA TUA RISPOSTA */
const es7 = `eritrevni ad agnirts`;
function reverseString(n) {
  return n.split(``).reverse().join(``);
}
const esercizio7 = reverseString(es7);
console.log(esercizio7);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log(`---ESERCIZIO 8---`);
/* SCRIVI QUI LA TUA RISPOSTA */
const es8 = `stringa al quale convertire la prima lettera in upperCase`;
const stringaDivisa = es8.split(" ");

function upperFirst(n) {
  for (i = 0; i < stringaDivisa.length; i++) {
    stringaDivisa[i] =
      stringaDivisa[i][0].toUpperCase() + stringaDivisa[i].substring(1);
  }
  return stringaDivisa.join(" ");
}
const esercizio8 = upperFirst(es8);
console.log(esercizio8);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log(`---ESERCIZIO 9---`);
const esercizio9 = `Lorem`;
function cutString(n) {
  return n.slice(1, -1);
}
console.log(cutString(esercizio9));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom",
  che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log(`---ESERCIZIO 10---`);
const esercizio10 = Math.floor(Math.random() * 110);
let rn = esercizio10;

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  for (let n = 0; n < NumeroRandom.length; n++) {
    let NumeroRandom,
      [n] = [];
    return NumeroRandom.push(Math.floor(Math.random() * 110));
  }
}
let es10 = giveMeRandom(rn);
console.log(es10);

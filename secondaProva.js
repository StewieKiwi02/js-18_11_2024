//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* 

let num1 = parseInt(prompt("inserisci primo numero"))
let num2 = parseInt(prompt("inserisci secondo numero"))
let numFinale 

if (num1 > num2){

    numFinale = num1
    alert(numFinale)
}

else {

    numFinale = num2 
    alert(numFinale)

}

*/

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* 

let num = parseInt(prompt("inserisci numero"))
let numFinale 

if(num < 5){

    numFinale = num
  alert("il numero " + numFinale + " è Tiny")

}else if (num < 10){

    numFinale = num
  alert("il numero " + numFinale + " è Small")

}else if (num < 15){

    numFinale = num
  alert("il numero " + numFinale + " è Medium")

}else if (num < 20){

    numFinale = num
  alert("il numero " + numFinale + " è Large")

}else {

    numFinale = num
  alert("il numero " + numFinale + " è Huge")

}

*/

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* 

let Finale

for (i = 0; i<11; i++){
  
  if (i === 3 || i === 8){
  
    Finale = ""
    console.log(Finale)
  }else {
  
    Finale = i
    console.log(Finale)
  }

}

*/

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* 

let Finale

for(i=0; i<=15; i++){

  if(i%2 === 0){

  Finale = i
  console.log("Il numero " + Finale + " pari")

  }else {
  
  Finale = i
  console.log("Il numero " + Finale + " dispari")
  }


}

*/

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* 

let num1 = parseInt(prompt("inserisci primo numero"))
let num2 = parseInt(prompt("inserisci secondo numero"))

if(num1 === 8 || num2 === 8){

  alert("Uno dei due numeri inseriti è 8")

}else if(num1 - num2 === 8 || num2 - num1 === 8) {

  alert("la differenza da come risulatato 8")

}else if(num1 + num2 === 8){

  alert("la somma da come risultato 8")

}else {

  alert("non valido ")

}

*/

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* 

let totalShoppingCart = parseInt(prompt("inserisci il tuo totale"))
const SPEDIZIONE = 10 
let totaleFinale

if(totalShoppingCart > 50){

  alert("hai la speizione gratuita")
  totaleFinale = totalShoppingCart
  alert("Quindi in totale sono " + totaleFinale)

}else {

  alert("devi pagare 10 euro di spedizione")
  totaleFinale = totalShoppingCart + 10
  alert("Quindi in totale sono " + totaleFinale)
}

*/

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* 

let totalShoppingCart = parseInt(prompt("inserisci il tuo totale"))
const SPEDIZIONE = 10 
const PROMOBF = 0.2
let totaleFinale
let totaleScontato = totalShoppingCart - PROMOBF

if(totaleScontato > 50){

  alert("hai la speizione gratuita")
  totaleFinale = totaleScontato
  alert("Quindi in totale sono " + totaleFinale + " €")

}else {

  alert("devi pagare 10 euro di spedizione")
  totaleFinale = totaleScontato + SPEDIZIONE
  alert("Quindi in totale sono " + totaleFinale + " €")
}

*/

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* 

let isMale = prompt("Inserisci 'true' se sei maschio o 'false' se sei femmina") === 'true'
let gender = isMale ? male : female
console.log(gender)


*/

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/*

for(i=0; i<=100; i++){

    if(i%3 === 0 && i%5 === 0){
    
    console.log("il numero " + i + " è multiplo di 3 e 5 quindi è FizzBuzz")
    
    }else if(i%3 === 0){
    
     console.log("il numero " + i + " è multiplo di 3 e quindi è Fizz")
    
    }else if(i%5 === 0){
    
    console.log("il numero " + i + " è multiplo di 5 quindi è Buzz")
  
    }else {
    
    console.log("il numero " + i + " non è multiplo di 3 e 5 quindi non è FizzBuzz")
    
    }
  
  }


*/
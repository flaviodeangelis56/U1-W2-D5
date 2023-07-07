/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
// console.log("ESERCIZIO 1");
// for (let i = 0; i < pets.length; i++) {
//   console.log(pets[i]);
// }

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
// console.log("ESERCIZIO 2");
// pets.sort();
// console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
// console.log("ESERCIZIO 3");
// pets.sort();
// pets.reverse();
// console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
// console.log("ESERCIZIO 4");
// pets.shift();
// pets.push("dog");
// console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
cars[0].licensePlate = "AA 100 AA";
cars[1].licensePlate = "AA 010 AA";
cars[2].licensePlate = "AA 001 AA";
//console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
  brand: "Fiat",
  model: "Panda",
  color: "gray",
  trims: ["carbon", "GT", "active"],
  licensePlate: "AA 200 AA",
});
// for (let i = 0; i < cars.length; i++) {
//   cars[i].trims.pop();
// }
// console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
// const justTrims = [];
// for (let i = 0; i < cars.length; i++) {
//   justTrims.push(cars[i].trims[0]);
// }
// console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].color.charAt(0) === "b") {
//     console.log("Fizz");
//   } else {
//     console.log("Buzz");
//   }
// }
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
// const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
// let i = 0;
// while (i < numericArray.length) {
//   i++;
//   if (numericArray[i] === 32) {
//     console.log(numericArray[i]);
//     break;
//   } else {
//     console.log(numericArray[i]);
//   }
// }
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const numberArray = [];
for (let i = 0; i < charactersArray.length; i++) {
  console.log(charactersArray[i]);
  if (charactersArray[i] === "a") {
    numberArray.push(1);
  }
  if (charactersArray[i] === "b") {
    numberArray.push(2);
  }
  if (charactersArray[i] === "c") {
    numberArray.push(3);
  }
  if (charactersArray[i] === "d") {
    numberArray.push(4);
  }
  if (charactersArray[i] === "e") {
    numberArray.push(5);
  }
  if (charactersArray[i] === "f") {
    numberArray.push(6);
  }
  if (charactersArray[i] === "g") {
    numberArray.push(7);
  }
  if (charactersArray[i] === "h") {
    numberArray.push(8);
  }
  if (charactersArray[i] === "i") {
    numberArray.push(9);
  }
  if (charactersArray[i] === "j") {
    numberArray.push(10);
  }
  if (charactersArray[i] === "k") {
    numberArray.push(11);
  }
  if (charactersArray[i] === "l") {
    numberArray.push(12);
  }
  if (charactersArray[i] === "m") {
    numberArray.push(13);
  }
  if (charactersArray[i] === "n") {
    numberArray.push(14);
  }
  if (charactersArray[i] === "o") {
    numberArray.push(15);
  }
  if (charactersArray[i] === "p") {
    numberArray.push(16);
  }
  if (charactersArray[i] === "q") {
    numberArray.push(17);
  }
  if (charactersArray[i] === "r") {
    numberArray.push(18);
  }
  if (charactersArray[i] === "s") {
    numberArray.push(19);
  }
  if (charactersArray[i] === "t") {
    numberArray.push(20);
  }
  if (charactersArray[i] === "u") {
    numberArray.push(21);
  }
  if (charactersArray[i] === "v") {
    numberArray.push(22);
  }
  if (charactersArray[i] === "w") {
    numberArray.push(23);
  }
  if (charactersArray[i] === "x") {
    numberArray.push(24);
  }
  if (charactersArray[i] === "y") {
    numberArray.push(25);
  }
  if (charactersArray[i] === "z") {
    numberArray.push(26);
  }
  //   switch (charactersArray[i]) {
  //     case charactersArray[i] === "a":
  //       numberArray.push(1);
  //       break;
  //     case charactersArray[i] === "b":
  //       numberArray.push(2);
  //       break;
  //     case charactersArray[i] === "c":
  //       numberArray.push(3);
  //       break;
  //     case charactersArray[i] === "d":
  //       numberArray.push(4);
  //       break;
  //     case charactersArray[i] === "e":
  //       numberArray.push(5);
  //       break;
  //     case charactersArray[i] === "f":
  //       numberArray.push(6);
  //       break;
  //     case charactersArray[i] === "g":
  //       numberArray.push(7);
  //       break;
  //     case charactersArray[i] === "h":
  //       numberArray.push(8);
  //       break;
  //     case charactersArray[i] === "i":
  //       numberArray.push(9);
  //       break;
  //     case charactersArray[i] === "j":
  //       numberArray.push(10);
  //       break;
  //     case charactersArray[i] === "k":
  //       numberArray.push(11);
  //       break;
  //     case charactersArray[i] === "l":
  //       numberArray.push(12);
  //       break;
  //     case charactersArray[i] === "m":
  //       numberArray.push(13);
  //       break;
  //     case charactersArray[i] === "n":
  //       numberArray.push(14);
  //       break;
  //     case charactersArray[i] === "o":
  //       numberArray.push(15);
  //       break;
  //     case charactersArray[i] === "p":
  //       numberArray.push(16);
  //       break;
  //     case charactersArray[i] === "q":
  //       numberArray.push(17);
  //       break;
  //     case charactersArray[i] === "r":
  //       numberArray.push(18);
  //       break;
  //     case charactersArray[i] === "s":
  //       numberArray.push(19);
  //       break;
  //     case charactersArray[i] === "t":
  //       numberArray.push(20);
  //       break;
  //     case charactersArray[i] === "u":
  //       numberArray.push(21);
  //       break;
  //     case charactersArray[i] === "v":
  //       numberArray.push(22);
  //       break;
  //     case charactersArray[i] === "w":
  //       numberArray.push(23);
  //       break;
  //     case charactersArray[i] === "x":
  //       numberArray.push(24);
  //       break;
  //     case charactersArray[i] === "y":
  //       numberArray.push(25);
  //       break;
  //     case charactersArray[i] === "z":
  //       numberArray.push(26);
  //       break;

  //   }
}
console.log(numberArray);

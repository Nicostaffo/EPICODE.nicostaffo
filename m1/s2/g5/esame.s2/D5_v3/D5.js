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
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/



pets.sort()

console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
// il meno uno serve per specificare ch deve partire dall'utimo elemento dell arrray
for (let i = pets.length - 1; i >= pets.length; i--) {
  console.log(pets[i]);
}



/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let lastPet = pets.shift()
pets.push(lastPet)
console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "ZZXA" + i
}

console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let newAuto = {
  brand: 'Fiat',
  model: '500',
  color: 'white',
  trims: ['sport', 'abarth'],
}
cars.push(newAuto);

for (x = 0; x < cars.length; x++) {
  cars[x].trims.pop();
}
console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (z = 0; z < cars.length; z++) {
  justTrims.push(cars[z].trims[0])
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (y = 0; y < cars.length; y++) {
  if (cars[y].color.charAt(0) === 'b') {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }

}
console.log(cars);
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let q = 0;

while (numericArray[q] !== 32) {
  console.log(numericArray[q]);
  q++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]

let newArrayAlphabetic = []
for (x = 0; x < charactersArray.length; x++) {
  switch (charactersArray[x]) {
    case "a":
      newArrayAlphabetic.push(1);
      break;
    case "b":
      newArrayAlphabetic.push(2);
      break;
    case "c":
      newArrayAlphabetic.push(3);
      break;
    case "d":
      newArrayAlphabetic.push(4);
      break;
    case "e":
      newArrayAlphabetic.push(5);
      break;
    case "f":
      newArrayAlphabetic.push(6);
      break;
    case "g":
      newArrayAlphabetic.push(7);
      break;
    case "h":
      newArrayAlphabetic.push(8);
      break;
    case "i":
      newArrayAlphabetic.push(9);
      break;
    case "j":
      newArrayAlphabetic.push(10);
      break;
    case "k":
      newArrayAlphabetic.push(11);
      break;
    case "l":
      newArrayAlphabetic.push(12);
      break;
    case "m":
      newArrayAlphabetic.push(13);
      break;
    case "n":
      newArrayAlphabetic.push(14);
      break;
    case "o":
      newArrayAlphabetic.push(15);
      break;
    case "p":
      newArrayAlphabetic.push(16);
      break;
    case "q":
      newArrayAlphabetic.push(17);
      break;
    case "r":
      newArrayAlphabetic.push(18);
      break;
    case "s":
      newArrayAlphabetic.push(19);
      break;
    case "t":
      newArrayAlphabetic.push(20);
      break;
    case "u":
      newArrayAlphabetic.push(21);
      break;
    case "v":
      newArrayAlphabetic.push(22);
      break;
    case "w":
      newArrayAlphabetic.push(23);
      break;
    case "x":
      newArrayAlphabetic.push(24);
      break;
    case "y":
      newArrayAlphabetic.push(25);
      break;
    case "z":
      newArrayAlphabetic.push(26);
      break;
    default:

  }
}
console.log(newArrayAlphabetic);
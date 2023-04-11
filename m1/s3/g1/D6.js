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

/* SCRIVI QUI LA TUA RISPOSTA */
{
    function area(li, l2) {
        return (li * l2)
    }
    console.log(area(5, 10));
}


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    function crazySum(a, z) {
        if (a == z) {
            return (a + z) * 3;
        } else {
            return a + z
        }
    }
    console.log(crazySum(3, 5));
}
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    function crazyDiff(num) {
        let differenza = Math.abs(num - 19);
        if (num > 19) {
            differenza *= 3;
        }
        return differenza
    }


    console.log(crazyDiff(15))
    console.log(crazyDiff(22))
}
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

{
    function boundary(n) {
        if ((n >= 20 && n <= 100) || n === 400) {
            return true
        } else {
            return false
        }
    }
    console.log(boundary(400));
    console.log(boundary(80));
    console.log(boundary(180));
}
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    function epify(stringa) {
        if (stringa.startsWith("EPICODE")) {
            return stringa
        } else {
            return "EPICODE" + stringa
        }
    }

    console.log(epify(" ti fa sudare su js"));
    console.log(epify("EPICODE ha un bel ambiente"));
}
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    function check3and7(num) {
        if (num % 3 === 0 || num % 7 === 0) {
            return true
        } else {
            return false
        }
    }

    console.log(check3and7(5));
    console.log(check3and7(21));
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    function reverseString(stringa) {
        return stringa.split("").reverse().join("")
    }
    console.log(reverseString("CIPOLLE"));
}
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    function upperFirst(parole) {
        let arr = parole.split(" ")
        for (let x = 0; x < arr.length; x++) {
            arr[x] = arr[x][0].toUpperCase() + arr[x].slice(1)
        }
        return arr.join(" ")
    }
    console.log(upperFirst("cicogna canarino lemure"));

}
// {
//     function upperFirst(gino) {
//         let z = gino.split(" ");
//         for (let i = 0; i < z.length; i++) {
//             z[i] = z[i][0].toUpperCase() + z[i].slice(1)
//         }
//         return z.join(" ")
//     }
//     console.log(upperFirst("ciao come stai"));
// }
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    function cutString(stringa) {
        if (stringa.lenght <= 2) {
            return "";
        }
        return stringa.substring(1, stringa.lenght - 1);
    }
}
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    function giveMeRandom(n) {
        let newArr = [];
        for (let i = 0; i < n; i++) {
            let randomNumber = Math.floor(Math.random() * 11);
            newArr.push(randomNumber);
        }
        return newArr;
    }
    console.log(giveMeRandom(5));
    console.log(giveMeRandom(8));
} 
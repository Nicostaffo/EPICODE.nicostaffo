interface UserService {
    carica: number
    numeroChiamate: number
    costoMinuto: number


    ricarica(euro: number): void
    numero404(): string
    getNumeroChiamate(): number
    chiamata(min: number): void
    azzeraChiamate(): void
    mostraRegistroChiamate(): void
    filtraChiamatePerDataOra(): void
}

interface Newsmartphone {
    id: number
    durata: number
    dataChiamata: Date
}

class Smartphone implements UserService {

    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    registroChiamate: Newsmartphone[]
    constructor(carica: number) {
        this.carica = carica;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = []
    }

    ricarica(euro: number): void {
        this.carica += euro

    }
    numero404(): string {
        return `il tuo credito residuo è ${this.carica.toFixed(2)}`
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    chiamata(min: number): void {
        let costoTotale = min * this.costoMinuto
        if (this.carica > costoTotale) {
            this.carica -= costoTotale
            this.numeroChiamate++
            const call: Newsmartphone = {
                id: this.numeroChiamate,
                durata: min,
                dataChiamata: new Date()
            }
            this.registroChiamate.push(call)
            localStorage.setItem('ultima chiamata', JSON.stringify(call.dataChiamata));
        } else {
            console.log('Il tuo credito residuo è insufficente');
        }

    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
    mostraRegistroChiamate(): void {
        for (let i = 0; i < this.registroChiamate.length; i++) {
            console.log(this.registroChiamate[i])
        }
    }
    filtraChiamatePerDataOra(): void {
        for (let i = 0; i < this.registroChiamate.length; i++) {
            console.log(this.registroChiamate[i].dataChiamata);

        }
    }
}
let firstUser = new Smartphone(0);
firstUser.ricarica(25);
firstUser.chiamata(5);
firstUser.azzeraChiamate();
console.log(firstUser);
firstUser.filtraChiamatePerDataOra();
let secondUser = new Smartphone(0);
secondUser.ricarica(20);
secondUser.chiamata(10);
console.log(secondUser.numero404());
console.log(secondUser);
let thirdUser = new Smartphone(0);
thirdUser.ricarica(50);
thirdUser.chiamata(7);
thirdUser.chiamata(10);
thirdUser.chiamata(3);
thirdUser.getNumeroChiamate();
console.log(thirdUser);
thirdUser.getNumeroChiamate();
thirdUser.filtraChiamatePerDataOra();

// ho provato a salvare la costante del tempo nel local storge ma non capisco perche non vada
// interface UserService {
//     carica: number;
//     numeroChiamate: number;
//     costoMinuto: number;

//     ricarica(euro: number): void;
//     numero404(): string;
//     getNumeroChiamate(): number;
//     chiamata(min: number): void;
//     azzeraChiamate(): void;
//     mostraRegistroChiamate(): void;
//     filtraChiamatePerDataOra(): void;
// }

// interface Newsmartphone {
//     id: number;
//     durata: number;
//     dataChiamata: Date;
// }

// class Smartphone implements UserService {
//     carica: number;
//     numeroChiamate: number;
//     costoMinuto: number;
//     registroChiamate: Newsmartphone[];

//     constructor(carica: number) {
//         this.carica = carica;
//         this.numeroChiamate = 0;
//         this.costoMinuto = 0.20;
//         this.registroChiamate = [];

//         const lastCallDateStr = localStorage.getItem('lastCallDate');
//         if (lastCallDateStr) {
//             const lastCallDate = new Date(JSON.parse(lastCallDateStr));
//             const call: Newsmartphone = {
//                 id: this.numeroChiamate,
//                 durata: 0,
//                 dataChiamata: lastCallDate
//             };
//             this.registroChiamate.push(call);
//         }
//     }

//     ricarica(euro: number): void {
//         this.carica += euro;
//     }

//     numero404(): string {
//         return `Il tuo credito residuo è ${this.carica.toFixed(2)}`;
//     }

//     getNumeroChiamate(): number {
//         return this.numeroChiamate;
//     }

//     chiamata(min: number): void {
//         const costoTotale = min * this.costoMinuto;
//         if (this.carica > costoTotale) {
//             this.carica -= costoTotale;
//             this.numeroChiamate++;
//             const call: Newsmartphone = {
//                 id: this.numeroChiamate,
//                 durata: min,
//                 dataChiamata: new Date()
//             };
//             this.registroChiamate.push(call);

//             localStorage.setItem('lastCallDate', JSON.stringify(call.dataChiamata));
//         } else {
//             console.log('Il tuo credito residuo è insufficiente.');
//         }
//     }

//     azzeraChiamate(): void {
//         this.numeroChiamate = 0;
//     }

//     mostraRegistroChiamate(): void {
//         for (const chiamata of this.registroChiamate) {
//             console.log(chiamata);
//         }
//     }

//     filtraChiamatePerDataOra(): void {
//         for (const chiamata of this.registroChiamate) {
//             console.log(chiamata.dataChiamata);
//         }
//     }
// }

// let firstUser = new Smartphone(0);
// firstUser.ricarica(25);
// firstUser.chiamata(5);
// firstUser.azzeraChiamate();
// console.log(firstUser);
// let secondUser = new Smartphone(0);
// secondUser.ricarica(20);
// secondUser.chiamata(10);
// console.log(secondUser.numero404());
// console.log(secondUser);
// let thirdUser = new Smartphone(0);
// thirdUser.ricarica(50);
// thirdUser.chiamata(7);
// thirdUser.chiamata(10);
// thirdUser.chiamata(3);
// thirdUser.getNumeroChiamate();
// console.log(thirdUser);
// thirdUser.getNumeroChiamate






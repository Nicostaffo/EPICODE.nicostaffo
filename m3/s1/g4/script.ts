const arr: Fullabbigliamento[] = [];

fetch('starter/Abbigliamento.json')
    .then((response: Response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error requesting data');
        }
    })
    .then(data => {
        console.log(data);

        data.forEach(element => {
            let newCapo = new Fullabbigliamento(
                element.id,
                element.codprod,
                element.collezione,
                element.capo,
                element.modello,
                element.quantita,
                element.colare,
                element.prezzoivaesclusa,
                element.prezzoivainclusa,
                element.disponibile,
                element.saldo
            )
            arr.push(newCapo);
            console.log(newCapo);
        });

        // Puoi fare ulteriori operazioni con l'array abbigliamentoArray
    })
    .catch((err: Error) => {
        console.log(err);
    });

class Fullabbigliamento {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colare: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
    scontoPrezzo: string;
    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colare: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colare = colare;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
        this.scontoPrezzo = this.mostraPrezzo();
    }
    mostraPrezzo(): string {
        let scontoPrezzo: number = (this.prezzoivainclusa / 100) * this.saldo;
        return `lo sconto applicato porterà il capo  a ${(this.prezzoivainclusa - scontoPrezzo).toFixed(2)}€`
    }
}
console.log(arr);





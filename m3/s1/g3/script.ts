abstract class WorkerList {
    coddred: number
    redditoannuolordo: number
    tasseinps: number
    tasseirpef: number

    constructor(coddred: number, tasseirpef: number, tasseinps: number) {
        this.coddred = this.getUtileTasse();
        this.redditoannuolordo = this.getRedditoAnnuoNetto();
        this.tasseinps = this.getTasseInps();
        this.tasseirpef = this.getTasseIrpef();
    }
    abstract getUtileTasse(): number
    abstract getRedditoAnnuoNetto(): number
    abstract getTasseInps(): number
    abstract getTasseIrpef(): number
}

class Worker_1 extends WorkerList {
    redditoannuolordo: number
    constructor(coddred: number, tasseirpef: number, tasseinps: number, redditoannuolordo: number) {
        super(coddred, tasseinps, tasseirpef)
        this.redditoannuolordo = redditoannuolordo;
    }

    getUtileTasse(): number {
        throw new Error("Not implemented");
    }

    getRedditoAnnuoNetto(): number {
        const redditoAnnuoNetto = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef())
        return redditoAnnuoNetto
    }

    getTasseInps(): number {
        const aliquotaINPS = 0.09;
        const tassazioneINPS = this.coddred * aliquotaINPS;
        return tassazioneINPS;
    }

    getTasseIrpef(): number {

        let tassazioneIrpef = 0;
        const aliquote = [
            { scaglione: 15000, aliquota: 0.23 },
            { scaglione: 28000, aliquota: 0.27 },
            { scaglione: 55000, aliquota: 0.38 },
            { scaglione: Infinity, aliquota: 0.41 },
        ];

        for (const { scaglione, aliquota } of aliquote) {
            if (this.redditoannuolordo <= scaglione) {
                tassazioneIrpef += (this.redditoannuolordo * aliquota) / 100;
                break;
            } else {
                const redditoScaglione = scaglione;
                tassazioneIrpef += (redditoScaglione * aliquota) / 100;
                this.redditoannuolordo -= redditoScaglione;
            }
        }

        return tassazioneIrpef;
    }
}

let pippoBaudo = new Worker_1()

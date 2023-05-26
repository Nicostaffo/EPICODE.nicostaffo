var Smartphone = /** @class */ (function () {
    function Smartphone(carica) {
        this.carica = carica;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
    Smartphone.prototype.ricarica = function (euro) {
        this.carica += euro;
    };
    Smartphone.prototype.numero404 = function () {
        return "il tuo credito residuo \u00E8 ".concat(this.carica.toFixed(2));
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.chiamata = function (min) {
        var costoTotale = min * this.costoMinuto;
        if (this.carica > costoTotale) {
            this.carica -= costoTotale;
            this.numeroChiamate++;
            var call = {
                id: this.numeroChiamate,
                durata: min,
                dataChiamata: new Date()
            };
            this.registroChiamate.push(call);
        }
        else {
            console.log('Il tuo credito residuo è insufficente');
        }
    };
    Smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    Smartphone.prototype.mostraRegistroChiamate = function () {
        for (var i = 0; i < this.registroChiamate.length; i++) {
            console.log(this.registroChiamate[i]);
        }
    };
    Smartphone.prototype.filtraChiamatePerDataOra = function () {
        for (var i = 0; i < this.registroChiamate.length; i++) {
            console.log(this.registroChiamate[i].dataChiamata);
        }
    };
    return Smartphone;
}());
var firstUser = new Smartphone(0);
firstUser.ricarica(25);
firstUser.chiamata(5);
firstUser.azzeraChiamate();
console.log(firstUser);
var secondUser = new Smartphone(0);
secondUser.ricarica(20);
secondUser.chiamata(10);
console.log(secondUser.numero404());
console.log(secondUser);
var thirdUser = new Smartphone(0);
thirdUser.ricarica(50);
thirdUser.chiamata(7);
thirdUser.chiamata(10);
thirdUser.chiamata(3);
thirdUser.getNumeroChiamate();
console.log(thirdUser);
thirdUser.getNumeroChiamate();
thirdUser.filtraChiamatePerDataOra();

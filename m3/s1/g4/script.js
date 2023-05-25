var arr = [];
fetch('starter/Abbigliamento.json')
    .then(function (response) {
    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error('Error requesting data');
    }
})
    .then(function (data) {
    console.log(data);
    data.forEach(function (element) {
        var newCapo = new Fullabbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colare, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
        arr.push(newCapo);
        console.log(newCapo);
    });
    // Puoi fare ulteriori operazioni con l'array abbigliamentoArray
})
    .catch(function (err) {
    console.log(err);
});
var Fullabbigliamento = /** @class */ (function () {
    function Fullabbigliamento(id, codprod, collezione, capo, modello, quantita, colare, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    Fullabbigliamento.prototype.mostraPrezzo = function () {
        var scontoPrezzo = (this.prezzoivainclusa / 100) * this.saldo;
        return "lo sconto applicato porter\u00E0 il capo  a ".concat((this.prezzoivainclusa - scontoPrezzo).toFixed(2), "\u20AC");
    };
    return Fullabbigliamento;
}());
console.log(arr);

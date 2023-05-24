var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WorkerList = /** @class */ (function () {
    function WorkerList(coddred, tasseirpef, tasseinps) {
        this.redditoannuolordo = this.getRedditoAnnuoNetto();
        // this.coddred = this.getUtileTasse();
        this.tasseinps = this.getTasseInps();
        this.tasseirpef = this.getTasseIrpef();
    }
    return WorkerList;
}());
var Worker_1 = /** @class */ (function (_super) {
    __extends(Worker_1, _super);
    function Worker_1(coddred, tasseirpef, tasseinps, redditoannuolordo) {
        var _this = _super.call(this, coddred, tasseinps, tasseirpef) || this;
        _this.redditoannuolordo = redditoannuolordo;
        return _this;
    }
    // getUtileTasse(): number {
    // }
    Worker_1.prototype.getRedditoAnnuoNetto = function () {
        var redditoAnnuoNetto = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
        return redditoAnnuoNetto;
    };
    Worker_1.prototype.getTasseInps = function () {
        var aliquotaINPS = 0.09;
        var tassazioneINPS = this.coddred * aliquotaINPS;
        return tassazioneINPS;
    };
    Worker_1.prototype.getTasseIrpef = function () {
        var tassazioneIrpef = 0;
        var aliquote = [
            { scaglione: 15000, aliquota: 0.23 },
            { scaglione: 28000, aliquota: 0.27 },
            { scaglione: 55000, aliquota: 0.38 },
            { scaglione: Infinity, aliquota: 0.41 },
        ];
        for (var _i = 0, aliquote_1 = aliquote; _i < aliquote_1.length; _i++) {
            var _a = aliquote_1[_i], scaglione = _a.scaglione, aliquota = _a.aliquota;
            if (this.redditoannuolordo <= scaglione) {
                tassazioneIrpef += (this.redditoannuolordo * aliquota) / 100;
                break;
            }
            else {
                var redditoScaglione = scaglione;
                tassazioneIrpef += (redditoScaglione * aliquota) / 100;
                this.redditoannuolordo -= redditoScaglione;
            }
        }
        return tassazioneIrpef;
    };
    return Worker_1;
}(WorkerList));
var pippoBaudo = new Worker_1(0, 15000, 0, 0);
console.log(pippoBaudo);

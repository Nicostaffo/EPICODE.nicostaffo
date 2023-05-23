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
var Account = /** @class */ (function () {
    function Account() {
        this.balance = 0;
    }
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    Account.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("Fondi insufficienti");
        }
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
var SonAccount = /** @class */ (function (_super) {
    __extends(SonAccount, _super);
    function SonAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SonAccount;
}(Account));
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        var interest = this.balance * 0.1;
        this.deposit(interest);
    };
    return MotherAccount;
}(Account));
// Esempio di utilizzo
var sonAccount = new SonAccount();
var motherAccount = new MotherAccount();
sonAccount.deposit(100);
sonAccount.withdraw(50);
motherAccount.deposit(500);
motherAccount.withdraw(200);
motherAccount.addInterest();
console.log("Saldo conto figlio:", sonAccount.getBalance());
console.log("Saldo conto madre:", motherAccount.getBalance());

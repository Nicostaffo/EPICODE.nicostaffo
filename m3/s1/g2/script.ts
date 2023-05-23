class Account {
    protected balance: number;

    constructor() {
        this.balance = 0;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Fondi insufficienti");
        }
    }

    getBalance() {
        return this.balance;
    }
}

class SonAccount extends Account { }

class MotherAccount extends Account {
    addInterest() {
        const interest = this.balance * 0.1;
        this.deposit(interest);
    }
}

// Esempio di utilizzo
const sonAccount = new SonAccount();
const motherAccount = new MotherAccount();

sonAccount.deposit(100);
sonAccount.withdraw(50);

motherAccount.deposit(500);
motherAccount.withdraw(200);
motherAccount.addInterest();

console.log("Saldo conto figlio:", sonAccount.getBalance());
console.log("Saldo conto madre:", motherAccount.getBalance());

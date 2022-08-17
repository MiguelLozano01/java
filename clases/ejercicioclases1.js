class Account {
    constructor(balance) {
        this._balance = balance;
    }
    set balance(balance) {
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
}
let cuen1 = new Account(526340);
console.log(cuen1.balance);

class SavinsAccount extends Account {
    constructor(interesetRate) {
        super(this._balance);
        this._interesetRate = interesetRate;
    }
    set interesetRate(interesetRate) {
        this._interesetRate = interesetRate;
        
    }
    get interesetRate() {
        return this._interesetRate;

    }

};

let cuenta2 = new SavinsAccount(12345);

console.log(cuenta2.this._balance,cuenta2.interesetRate);

class ChekingAccount extends Account {
    constructor(interesetRate) {
        super(this._balance);
        this._interesetRate = interesetRate;
    }
    
}

class BankAccount {
    constructor() {
        this.balance = 0 
        this.transaction = []
        }
    getBalance() {
        return this.balance;
        }
    deposit(num) {
        this.balance += num
        this.transaction.push({credit: num, debt: null, date: new Date().toLocaleDateString()});
        return this.balance
    }
    withdrawal(num) {
        this.balance -= num
        this.transaction.push({debt: num, credit: null, date: new Date().toLocaleDateString()})
        return this.balance
    }
}

module.exports = BankAccount
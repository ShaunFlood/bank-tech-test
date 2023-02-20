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
        this.transaction.push({credit: num, date: new Date().toLocaleDateString()});
        return this.balance
    }
    withdrawal(num) {
        this.balance -= num
        this.transaction.push({debt: num, date: new Date().toLocaleDateString()})
        return this.balance
    }
}

module.exports = BankAccount
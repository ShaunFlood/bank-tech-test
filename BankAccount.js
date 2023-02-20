class BankAccount {
    constructor() {
        this.balance = 0 
        this.transaction = []
        }
    getBalance() {
        return this.balance;
        }
    deposit(num, date) {
        this.balance += num
        this.transaction.push(num, date);
        return this.balance
    }
    withdrawal(num) {
        this.balance -= num
        this.transaction.push(num);
        return this.balance
    }
}

module.exports = BankAccount
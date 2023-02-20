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
        return this.balance
    }
    withdrawal(num) {
        this.balance -= num
        return this.balance
    }
}

module.exports = BankAccount
class BankAccount {
    constructor() {
        this.balance = 0 
        }
    getBalance() {
        return this.balance;
        }
    deposit(num) {
        this.balance += num
        return this.balance
    }
}

module.exports = BankAccount
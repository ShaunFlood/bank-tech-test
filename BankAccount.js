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
        this.transaction.push({credit: num, debt: null, date: new Date().toLocaleDateString(),balance: this.balance});
        return this.balance
    }
    withdrawal(num) {
        this.balance -= num
        this.transaction.push({debt: num, credit: null, date: new Date().toLocaleDateString(), balance: this.balance})
        return this.balance
    }
    print(){
        const header = "date || credit || debit || balance";
        console.log(header)
        this.transaction.forEach(({ credit, debt, date, balance }) => {
            const transactionString = `${date} || ${credit} || ${debt} || ${balance}`;
            console.log(transactionString)
        })
        //spilt || this and show each one seperatly
        // then we need to print out each thing which is seperated with '||'
        // print out the header
        // 
    }
}

module.exports = BankAccount
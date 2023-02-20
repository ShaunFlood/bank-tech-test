const Account = require('./BankAccount')

describe('Balance functionality of account', () => {
    it('Should display 0 for the balance', () => {
        const account = new Account()
        expect(account.getBalance()).toBe(0);
    })
    it('Should add money to the balance once a deposit is made', () => {
        const account = new Account();
        account.deposit(50);
        expect(account.getBalance()).toBe(50)
    })
    it('Should subtract money to the balance once a withdrawl is made', () => {
        const account = new Account();
        account.deposit(100)
        account.withdrawal(50)
        expect(account.getBalance()).toBe(50)
    })
});
describe('Transaction functionality of account', () => {
    it('Should display an empty array', () => {
        const account = new Account();
        expect(account.transaction).toEqual([])
    })
    it('Should be pushed the amount of a deposit', () => {
        const account = new Account();
        account.deposit(100)
        expect(account.transaction).toEqual([100])
    })
});
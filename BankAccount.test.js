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
    it('Should push the amount of a deposit as a credit', () => {
        const account = new Account();
        account.deposit(100)
        expect(account.transaction.map(t => t.credit)).toContain(100)
    })
    it('Should push the amount of a withdrawal as a debt', () => {
        const account = new Account();
        account.withdrawal(100)
        expect(account.transaction.map(t => t.debt)).toContain(100)
    })
    it('Should push the date in to the transcation from deposit', () => {
        const account = new Account();
        account.deposit(100)
        expect(account.transaction.map(t => t.credit)).toContain(100)
        expect(account.transaction.map(t => t.date)).toContain('2/20/2023')
    })
    it('Should push the date in to the transaction from withdrawal', () => {
        const account = new Account();
        account.withdrawal(50)
        expect(account.transaction.map(t => t.debt)).toContain(50)
        expect(account.transaction.map(t => t.date)).toContain('2/20/2023')

    })
    it('Should return null for debt when a deposit is made', () => {
        const account = new Account();
        account.withdrawal(50)
        expect(account.transaction.map(t => t.credit)).toEqual([null])
    })
});
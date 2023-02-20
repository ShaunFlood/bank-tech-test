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
  });
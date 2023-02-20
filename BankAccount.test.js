const Account = require('./BankAccount')

describe('Balance functionality of account', () => {
    it('Should display 0 for the balance', () => {
        const account = new Account()
        expect(account.getBalance()).toBe(0);
    })
  });
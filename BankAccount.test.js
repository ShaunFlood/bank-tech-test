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
        expect(account.transaction.map(t => t.date)).toContain('2/21/2023')
    })
    it('Should push the date in to the transaction from withdrawal', () => {
        const account = new Account();
        account.withdrawal(50)
        expect(account.transaction.map(t => t.debt)).toContain(50)
        expect(account.transaction.map(t => t.date)).toContain('2/21/2023')

    })
    it('Should push a balance in from a withdrawal', () => {
        const account = new Account();
        account.deposit(100)
        account.withdrawal(50)
        expect(account.transaction.map(t => t.debt)).toContain(50)
        expect(account.transaction.map(t => t.date)).toContain('2/21/2023')
        expect(account.transaction.map(t => t.balance)).toContain(50)
    })
    it('Should push a balance in from a deposit', () => {
        const account = new Account();
        account.deposit(1000)
        expect(account.transaction.map(t => t.credit)).toContain(1000)
        expect(account.transaction.map(t => t.date)).toContain('2/21/2023')
        expect(account.transaction.map(t => t.balance)).toContain(1000)
    })
    it('Should return null for credit when a withdrawal is made', () => {
        const account = new Account();
        account.withdrawal(50)
        expect(account.transaction.map(t => t.credit)).toEqual([null])
    })
    it('Should return null for debt when a deposit is made', () => {
        const account = new Account();
        account.deposit(50)
        expect(account.transaction.map(t => t.debt)).toEqual([null])
    })
});
describe('Statement functionality of account', () => {
    it('Should display an header', () => {
        const account = new Account();
        const logSpy = jest.spyOn(console, 'log').mockImplementation(); //this lets us spy on the console log
        account.print();
        expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance');
    }) 
    it('Should display the information from a deposit and withdrawal', () => {
        const account = new Account();
        const logSpy = jest.spyOn(console, 'log').mockImplementation(); //this lets us spy on the console log
        account.deposit(1000)
        account.withdrawal(200)
        account.print();
        expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance');
        expect(logSpy).toHaveBeenCalledWith('2/21/2023 || 1000 || null || 1000');
        expect(logSpy).toHaveBeenCalledWith('2/21/2023 || null || 200 || 800');
    })
})
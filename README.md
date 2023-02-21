# bank-tech-test

The planning stage of the project:

I started an excaildraw to design how I believe the class should work and naming conventions.
This inlcudes the acceptance criteria

![picture 1](images/955339b4ea430230d558d30560c54c8a224a3d89b652f8cae33bec9b5b5c3a13.png)  


To run the test you need to:
1) nvm install node
2) nvm use node
3) cd bank-tech-test
4) npm init -y
5) npm add jest
6) npm install jest -g
7) jest to finally run the tests.

The image below is the test passing in jest

![picture 3](images/b4d6b18d71d59aba62e9382f722b22e2fb6bcaf1b948abfc5eb04e4dabaded16.png)  



To run the application you have to:
1) node
2) const BankAccount = require('./BankAccount')
3) const account = new BankAccount

We can use the functions at this point, so we can make a withdrawal or deposit by calling the functions on the const account.
Withdrawal and Deposit takes in number variables for the account. 

4) account.deposit(100);
5) account.withdrawal(20);

We can just see the balance by using this function, which should use the stored memory in this case to return 80.

6) account.getBalance();

If we want a more detailed history then we can use the statement function to outline what's been deposited and the balances at the time.

7) account.statement();

Here is the application running within the commmand line using local memory to store the information

![picture 2](images/8cab55b81bd9bae16ded5a141db73fdb1958bb48ece664733fb136a61a01c53a.png)  

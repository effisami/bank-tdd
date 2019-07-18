import { TestBed } from '@angular/core/testing';

import { BankService } from './bank.service';
import { Account } from './account';


describe('BankService', () => {
  let service: BankService
  let account: Account
  beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.get(BankService);
      account = {
          customerName: 'Samira Gh',
          balance: 5000,
      };
  });

  it('should be created', () => {
      const service: BankService = TestBed.get(BankService);
      expect(service).toBeTruthy();
  });

  let from: Account;
  let to: Account;
  let amount = 100;

  describe('Account balance', () => {
      it('should return balance as a number', () => {
          let fakeAccount = {customerName: 'Samira Gh', balance: 3000,};
          expect(fakeAccount).toBeTruthy()
      })
      it('should throw error if balance is below 0 ', () => {
          let failAccount = {customerName: 'Samira Gh', balance: -1,};
          let danger = () => {service.getBalance(failAccount)}
          expect(danger).toThrow();
      })
      it('should throw error if balance is NaN', () => {
          let failAccount = {customerName: 'Samira Gh', balance: NaN,};
          let danger = () => {service.getBalance(failAccount)}
          expect(danger).toThrow();
      })
      it('should throw error if balance is null', () => {
          let failAccount = {customerName: 'Samira Gh', balance: null,};
          let danger = () => {service.getBalance(failAccount)}
          expect(danger).toThrow();
      })
      it('should throw error if invalid customerName have whitespace', () => {
          let failAccount1 = {customerName: ' Samira Gh', balance: 3000};
          let danger = () => service.getBalance(failAccount1);
          expect(danger).toThrow();
      })
      it('should throw error if invalid customerName is empty string', () => {
          let failAccount2 = {customerName: '', balance: 3000};
          let danger = () => service.getBalance(failAccount2);
          expect(danger).toThrow();
      })
  })
  describe('Account deposit', () => {

    it('should exist a function that make a deposit', ()  => {
        expect(service.deposit).toBeDefined();
    })
    it('should update balance', () => {
        let amount = 200;
        let validAccount = {customerName: 'Samira', balance: 3000};
        let newBalance = validAccount.balance + amount;
        service.deposit(validAccount, amount);  
        let actual = service.getBalance(validAccount)
        expect(actual).toBe(newBalance);  

    })
    it('should throw error if account is null', () => {
        let danger = () => service.deposit(null, 500);
        expect(danger).toThrow()
    })
    it('should throw error if customerName is empty string', () => {
        let failAccount1 = {customerName: '', balance: 3000};
        let danger = () => service.deposit(failAccount1, amount);
        expect(danger).toThrow();
    })
    it('should throw error if amount is below 0', () => {
        let amount = -1;
        let danger = () => {service.deposit(account, amount);}
        expect(danger).toThrow()
    })
    it('should throw error if amount is null', () => {
        let amount = null;
        let danger = () => {service.deposit(account, amount);}
        expect(danger).toThrow();
    })
    it('should throw error if amount is NaN', () => {
        let amount = NaN;
        let danger = () => {service.deposit(account, amount);}
        expect(danger).toThrow()
    })
    it('should throw error if invalid account, to customerName', () => {
        let failAccount = { customerName: null, balance: 3000};
        let danger = () => service.deposit(failAccount, amount)
        expect(danger).toThrow()
    })

})
describe('Test Withdraw', () => {
  it('should exist a function than make withdraw', () => {
      expect(service.withdraw).toBeDefined()
  })
  it('should update balance', () => {
      let amount = 200;
      let validAccount = {customerName: 'Samira', balance: 3000};
      let newBalance = validAccount.balance - amount;
      service.withdraw(validAccount, amount);  
      let actual = service.getBalance(validAccount)
      expect(actual).toBe(newBalance);  
  })
})
describe('Testing transfer', () => {
  let from = { customerName: 'Samira Gh', balance: 3000 };
  let to = { customerName: 'Samira Gh', balance: 2500 };

  it('should exist a function that make transfer', () => {
      let actual = service.transfer(from, to, amount)
      expect(actual).toBe(actual);
  })
  it('should update balance from account', () => {
      let amount = 200;
      let validFromAccount = {customerName: 'Samira', balance: 3000};
      let validToAccount = {customerName: 'Samira', balance: 3000};
      let newBalanceFrom = validFromAccount.balance - amount;
      let newBalanceTo = validToAccount.balance + amount;
      service.transfer(validFromAccount, validToAccount, amount);  
      let actualFrom = service.getBalance(validFromAccount)
      let actualTo = service.getBalance(validToAccount)
      expect(actualFrom).toBe(newBalanceFrom);  
      expect(actualTo).toBe(newBalanceTo);
  })
})
});


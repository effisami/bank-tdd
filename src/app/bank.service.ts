import { Injectable } from '@angular/core';
import { Account } from './account';
@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor() { }
  getBalance(account: Account): number {
    if(account.balance < 0) {
        throw new Error('balance is not valid with below 0')
    }
    else if(isNaN(account.balance)) {
         throw new Error('invalid balance, cant be NaN')
    }
    else if(account.balance === null) {
        throw new Error('balance cant be null')
    }
    else if(account.customerName !== account.customerName.trim()) {
        throw new Error('invalid customerName, remove whitespace');
    }
    else if(account.customerName === '') {
        throw new Error('invalid customerName, empty name')
    }
    return account.balance
};
deposit(account: Account, amount: number): void {
  if( !account )
      throw new Error('no account');
  else if( account.customerName === '') {
      throw new Error('invalid customerName, empty name')
  } else if( amount < 0) {
      throw new Error('not valid');
  } else if (amount === null) {
      throw new Error('not valid');
  } else if(isNaN(amount)) {
      throw new Error('not valid');
  }
  else if(account.customerName === null) {
      throw new Error('invalid account')
  }
  else {
      account.balance += amount
  }
};
withdraw(account: Account, amount: number): void {
 account.balance -= amount;
};
transfer(from: Account, to: Account, amount: number): void {
 
       from.balance -= amount;
       to.balance += amount;
  }
};


//getBalance(account: Account): number;
	//deposit(account: Account, amount: number): void;
	//withdraw(account: Account, amount: number): void;
//	transfer(from: Account, to: Account, amount: number): void;//
// create angular app

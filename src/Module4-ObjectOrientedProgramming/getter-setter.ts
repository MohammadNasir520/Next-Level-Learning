class BankAccount {
  id: number;
  name: string;
  private balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  // getter

  get _balance(): number {
    return this.balance;
  }
  // setter
  set deposit(ammount: number) {
    this.balance = this.balance + ammount;
  }

  //.................................
  getBalance(): number {
    return this.balance;
  }
}

const myAccount = new BankAccount(38, "Nasir", 50);
// console.log(myAccount);

class studentAccount extends BankAccount {
  test() {}
}

myAccount.deposit = 30;
console.log(myAccount._balance);

// class BankAccount {
//   id: number;
//   name: string;
//   private balance: number;
//   constructor(id: number, name: string, balance: number) {
//     this.id = id;
//     this.name = name;
//     this.balance = balance;
//   }
//   // getter

//   get _balance(): number {
//     return this.balance;
//   }
//   // setter
//   set deposit(ammount: number) {
//     this.balance = this.balance + ammount;
//   }
// }

// const myAccount = new BankAccount(38, "Nasir", 50);

// myAccount.deposit = 30; // no need to call setter , just assign value like variable.
// console.log(myAccount._balance);

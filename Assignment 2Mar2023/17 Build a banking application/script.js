//build a banking application
let customer ={
  name :"Anshu",
balance :1000,
//deposit money
  deposit : function(amount){
    this.balance+=amount;
    console.log(`Deposit of ${amount} successful.New balance is ${this.balance}.`)
  }
    
//withdraw 
withdraw : function(amount) {
    this.balance -= amount;
    console.log(`Withdrawal of ${amount} successful.New Balance is ${this.balance}.`)
  }
}


customer.deposit(500);
customer.withdraw(200);

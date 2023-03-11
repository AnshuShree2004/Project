//bill splitter
function calculate(costPerDish,numPeople){
  let totalBill=costPerDish*numPeople;
  let billPerPerson=totalBill/numPeople;
   return {
     totalBill,
     billPerPerson,
   }
}
let total=calculate(20,5);
console.log(total);

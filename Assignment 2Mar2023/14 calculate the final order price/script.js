//calculate the final order
const calculate =(items) =>{
  let totalCost=0;
  items.forEach((items) => {
    totalCost += items.unitPrice*items.quantity;
  });
  return totalCost;
}
let items =[{unitPrice:10,quantity:2},
    {unitPrice:20,quantity:2}, {unitPrice:30,quantity:5},
       {unitPrice:10,quantity:8}
        ,{unitPrice:50,quantity:2}];
let total = calculate(items);
console.log(total);

//rental cost
function calculate(numDays,carType) {
  let rentalCost = 0;
  switch (carType) {
      case "economy":
rentalCost = 4000;
      break
       case "midSize":
rentalCost =10000;
break 

      case "luxury" :
rentalCost = 20000;
      break 
  default:
      rental =0;
  }
  
return numDays*rentalCost;
}
//calling function
let totalCost = calculate(5,"economy")//Rs 20,000
console.log(totalCost)

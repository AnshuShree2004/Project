//changing temperature from ०C to ०F
function temp(celcius){
  let farenheit = 9*celcius/5+32;
  return farenheit;
}
//calling function
let tempConverter = temp(0);
console.log(tempConverter);

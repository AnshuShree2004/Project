let discount=(originalPrice,discountPrice) => {
  let discounts = discountPrice *100/originalPrice;
  return discounts;
}
let result = discount(200,1000);
console.log(result)

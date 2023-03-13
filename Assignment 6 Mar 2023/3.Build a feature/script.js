const exchangeRate = 80; // Exchange rate of 1 USD to 80 INR

const items = {
  "item1": 10, // USD
  "item2": 20,
  "item3": 30,
  "item4": 40,
};

const convertedItems = Object.fromEntries(
Object.entries(items).map(([itemName, priceInUSD]) => {
    const priceInINR = priceInUSD * exchangeRate;
    return [itemName, priceInINR];
  })
);

console.log(convertedItems);

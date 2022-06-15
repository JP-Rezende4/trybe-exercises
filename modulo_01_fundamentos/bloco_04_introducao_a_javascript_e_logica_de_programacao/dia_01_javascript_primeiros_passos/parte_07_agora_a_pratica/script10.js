const productCost = 10;
const saleValue = 20;
const quantity = 1000;
const tax = 0.2;

const productTotal = productCost * quantity;

const saleTotal = saleValue * quantity;

const totalCost = (productTotal) + (productTotal * tax);

const profit = saleTotal - totalCost;

console.log(profit);

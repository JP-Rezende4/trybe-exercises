const productCost = 10;
const saleValue = 20;
const quantity = 1000;
const tax = 0.2;

if (productCost < 0 || saleValue < 0 || quantity < 0 || tax < 0) {
  console.log('Valor(es) de entrada inválido(s)');
} else {
  const productTotal = productCost * quantity;

  const saleTotal = saleValue * quantity;

  const totalCost = (productTotal) + (productTotal * tax);

  const profit = saleTotal - totalCost;

  console.log(profit);
}

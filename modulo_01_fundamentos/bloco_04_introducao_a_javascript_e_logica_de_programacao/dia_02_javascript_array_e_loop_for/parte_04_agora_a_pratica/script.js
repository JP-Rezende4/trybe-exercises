let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumOfNumbers = 0;

console.log('Requisito 1:');
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

console.log('Requisito 2:');
for (let i = 0; i < numbers.length; i += 1) {
  sumOfNumbers += numbers[i];
}

console.log(sumOfNumbers);

console.log('Requisito 3:');
const average = sumOfNumbers / numbers.length;

console.log(average);

console.log('Requisito 4:');
if (average > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log('Requisito 1:');
for (let number of numbers) {
  console.log(number);
}

console.log('Requisito 2:');
let sumOfNumbers = 0;

for (let number of numbers) {
  sumOfNumbers += number;
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

console.log('Requisito 5:');
let highestNumber = numbers[0];

for (let number of numbers) {
  if (number > highestNumber) {
    highestNumber = number;
  }
}

console.log(highestNumber);

console.log('Requisito 6:');
let oddCount = 0;

for (let number of numbers) {
  if (number % 2 !== 0) {
    oddCount += 1;
  }
}

if (oddCount === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(oddCount);
}

console.log('Requisito 7:');
let lowestNumber = numbers[0];

for (let number of numbers) {
  if (number < lowestNumber) {
    lowestNumber = number;
  }
}

console.log(lowestNumber);

console.log('Requisito 8:');
const numbers2 = [];

for (let i = 1; i <= 25; i += 1) {
  numbers2.push(i);
}

for (let number of numbers2) {
  console.log(number);
}

console.log('Requisito 9:');
for (let number of numbers2) {
  console.log(number / 2);
}

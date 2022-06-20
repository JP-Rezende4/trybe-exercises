let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log('Reqquisto 1:');
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

for (let number of numbers) {
  console.log(number);
}

console.log('Reqquisto 2:');
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

for (let number of numbers) {
  console.log(number);
}

console.log('Reqquisto 3:');
let numbers2 = [];
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
  if (i === numbers.length - 1) {
    numbers2.push(numbers[i] * 2);
  } else {
    numbers2.push(numbers[i] * numbers[i + 1]);
  }
}

for (let number of numbers2) {
  console.log(number);
}

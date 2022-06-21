const number = 13;
let counter = 0;
let isPrime = false;

for (let i = 2; i <= number; i += 1) {
  if (number % i === 0) {
    isPrime = true;
    counter += 1;
  }

  if (counter > 1) {
    isPrime = false;
    break;
  }
}

switch (isPrime) {
  case true:
    console.log(number + ' é um número primo!');
    break;
  case false:
    console.log(number + ' NÃO é um número primo!');
}

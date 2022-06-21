let result;

for (let i1 = 2; i1 <= 50; i1 += 1) {
  let counter = 0;

  for (let i2 = 2; i2 <= i1; i2 += 1) {
    if (i1 % i2 === 0) {
      counter += 1;
    }

    if (counter > 1) {
      break;
    }
  }

  if (counter === 1) {
    result = i1;
  }
}

console.log(result);

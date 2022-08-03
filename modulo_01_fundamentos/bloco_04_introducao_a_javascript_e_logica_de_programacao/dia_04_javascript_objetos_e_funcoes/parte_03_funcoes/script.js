// Exercício 1
function calculator(n1, n2, operation) {
  switch (operation) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    case '/':
      return n1 / n2;
    case '%':
      return n1 % n2;
    default:
      return 'Operação inválida';
  }
}

// Exercício 2
function biggestNumber(n1, n2) {
  if (n1 > n2) {
    return n1;
  } if (n2 > n1) {
    return n2;
  }

  return 'Os números são iguais';
}

// Exercício 3
function biggestInThreeNumbers(n1, n2, n3) {
  const numbers = [n1, n2, n3];
  let result = n1;

  if (n1 === n2 && n2 === n3) {
    return 'Os números são iguais';
  }

  for (let number of numbers) {
    if (number > result) {
      result = number;
    }
  }

  return result;
}

// Exercício 4
function isThisNumber(n) {
  if (n > 0) {
    return 'positive';
  } if (n < 0) {
    return 'negative';
  }

  return 'zero';
}

// Exercício 5
function triangleCheck(n1, n2, n3) {
  if (n1 <= 0 || n2 <= 0 || n3 <= 0) {
    return false;
  } if (n1 + n2 + n3 === 180) {
    return true;
  }

  return false;
}

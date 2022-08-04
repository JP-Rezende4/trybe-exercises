// Exercício 1
function isPalindrome(string) {
  if (string === string.split('').reverse().join('')) {
    return true;
  }

  return false;
}

// Exercício 2
function indexOfBiggestValue(array) {
  let result = 0;

  for (let index in array) {
    if (array[index] > array[result]) {
      result = index;
    }
  }

  return result;
}

// Exercício 3

// Exercício 4

// Exercício 5

// Exercício 6

// Exercício 7

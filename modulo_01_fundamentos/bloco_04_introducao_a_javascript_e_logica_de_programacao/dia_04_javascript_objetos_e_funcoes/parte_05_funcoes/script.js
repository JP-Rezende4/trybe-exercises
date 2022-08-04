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
function indexOfSmallestValue(array) {
  let result = 0;

  for (let index in array) {
    if (array[index] < array[result]) {
      result = index;
    }
  }

  return result;
}

// Exercício 4
function biggestName (array) {
  let result = array[0];

  for (let name of array) {
    if (name.length > result.length) {
      result = name;
    }
  }

  return result;
}

// Exercício 5

// Exercício 6

// Exercício 7

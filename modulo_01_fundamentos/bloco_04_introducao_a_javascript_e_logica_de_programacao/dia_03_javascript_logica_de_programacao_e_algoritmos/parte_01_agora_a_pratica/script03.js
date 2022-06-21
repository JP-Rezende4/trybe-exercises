let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0].length;
let smallestWord = array[0].length;

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > biggestWord) {
    biggestWord = array[i];
  }

  if (array[i].length < smallestWord) {
    smallestWord = array[i];
  }
}

console.log('Maior palavra:');
console.log(biggestWord);
console.log('Menor palavra:');
console.log(smallestWord);

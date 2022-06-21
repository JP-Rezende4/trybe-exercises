const n = 5;
const star = '*';
const space = ' ';

if (n <= 1) {
  console.log('Número inválido!');
} else if (n % 2 !== 0) {
  for (let i = 1; i <= n; i += 2) {
    let line = '';

    line = space.repeat((n - i) / 2) + star.repeat(i);

    console.log(line);
  }
} else {
  for (let i = 2; i <= n; i += 2) {
    let line = '';

    line = space.repeat((n - i) / 2) + star.repeat(i);

    console.log(line);
  }
}

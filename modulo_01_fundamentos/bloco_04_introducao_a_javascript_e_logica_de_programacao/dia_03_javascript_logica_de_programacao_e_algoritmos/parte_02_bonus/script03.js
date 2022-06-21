const n = 5;
const star = '*';
const space = ' ';

if (n > 1) {
  for (let i = 1; i <= n; i += 1) {
    let line = '';

    line = space.repeat(n - i) + star.repeat(i);

    console.log(line);
  }
} else {
  console.log('Número inválido!');
}

const n = 7;
const star = '*';
const space = ' ';

if (n <= 1 || n % 2 === 0) {
  console.log('Número inválido!');
} else {
  for (let i = 1; i <= n; i += 2) {
    let line = '';

    if (i === 1) {
      line = space.repeat((n - i) / 2) + star;
    } else if (i === n) {
      line = star.repeat(i);
    } else {
      line = space.repeat((n - i) / 2) + star + space.repeat(i - 2) + star;
    }

    console.log(line);
  }
}

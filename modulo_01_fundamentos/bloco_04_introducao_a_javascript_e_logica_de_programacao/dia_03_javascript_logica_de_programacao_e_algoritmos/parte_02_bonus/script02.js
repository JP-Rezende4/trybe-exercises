const n = 5;
const star = '*';
let line = '*';

if (n > 1) {
  for (let i = 1; i <= n; i += 1) {
    console.log(line);

    line += star;
  }
} else {
  console.log('Número inválido!');
}

const n = 5;

if (n > 1) {
  for (let i = 1; i <= n; i += 1) {
    let line = '*';

    line += line.repeat(n - 1);

    console.log(line);
  }
} else {
  console.log('Número inválido!');
}

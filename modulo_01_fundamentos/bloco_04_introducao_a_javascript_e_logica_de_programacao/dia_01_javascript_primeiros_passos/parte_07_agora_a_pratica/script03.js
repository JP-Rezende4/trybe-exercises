const a = 8;
const b = 4;
const c = 2;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
} else {
  console.log('Os números são iguais');
}

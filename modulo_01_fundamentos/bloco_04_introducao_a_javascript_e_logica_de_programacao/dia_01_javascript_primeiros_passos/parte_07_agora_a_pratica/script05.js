const a = 40;
const b = 40;
const c = 100;

if (a <= 0 || b <= 0 || c <= 0) {
  console.log(false);
} else if (a + b + c === 180) {
  console.log(true);
} else {
  console.log(false);
}

const grade = Math.floor(Math.random() * 100) + 1;;

if (grade >= 80) {
  console.log('Parabéns, você foi aprovado(a)!');
} else if (grade >= 60) {
  console.log('Você está na nossa lista de espera');
} else {
  console.log('Você foi reprovado(a)');
}

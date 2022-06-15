const grade = Math.floor(Math.random() * 100) + 1;;
let applicantStatus;

console.log('Sua nota: ' + grade);

if (grade >= 80) {
  applicantStatus = 'aprovada';
} else if (grade >= 60) {
  applicantStatus = 'lista';
} else {
  applicantStatus = 'reprovada';
}

switch (applicantStatus) {
  case 'aprovada':
    console.log('Parabéns, você foi aprovado(a)!');
    break;
  case 'lista':
    console.log('Você está na nossa lista de espera');
    break;
  case 'reprovada':
    console.log('Você foi reprovado(a)');
    break;
  default:
    console.log('não se aplica');
}

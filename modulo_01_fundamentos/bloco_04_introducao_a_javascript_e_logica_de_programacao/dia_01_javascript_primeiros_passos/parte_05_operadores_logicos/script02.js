let weekDay = '';

const randomNumber = Math.floor(Math.random() * 7) + 1;

switch (randomNumber) {
  case 1:
    weekDay = 'domingo';
    break;
  case 2:
    weekDay = 'segunda-feira';
    break;
  case 3:
    weekDay = 'terça-feira';
    break;
  case 4:
    weekDay = 'quarta-feira';
    break;
  case 5:
    weekDay = 'quinta-feira';
    break;
  case 6:
    weekDay = 'sexta-feira';
    break;
  case 7:
    weekDay = 'sábado';
}

if (weekDay === 'segunda-feira' || 'terça-feira' || 'quarta-feira' || 'quinta-feira' || 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else if ('sábado' || 'domingo') {
  console.log('FINALMENTE, descanso merecido UwU');
}

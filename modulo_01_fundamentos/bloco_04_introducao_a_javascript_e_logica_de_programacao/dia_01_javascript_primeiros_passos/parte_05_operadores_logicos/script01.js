const currentHour = Math.floor(Math.random() * (24 - 4 + 1) ) + 4;

let message = '';

console.log('São ' + currentHour + ' horas!');

if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18) {
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14) {
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11) {
  message = 'Hora do almoço!!!';
} else {
  message = 'Hmmm, cheiro de café recém passado';
}

console.log(message);

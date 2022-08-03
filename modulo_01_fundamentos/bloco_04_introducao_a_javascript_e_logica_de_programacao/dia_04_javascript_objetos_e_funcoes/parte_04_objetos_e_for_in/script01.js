const info01 = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info01.personagem);
console.log();

info01.recorrente = 'Sim';

console.log(info01);
console.log();

for (let chave in info01) {
  console.log(chave);
}
console.log();

for (let chave in info01) {
  console.log(info01[chave]);
}
console.log();

const info02 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let chave in info01) {
  if (chave === 'recorrente' && info01[chave] === info02[chave]) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info01[chave] + ' e ' + info02[chave]);
  }
}

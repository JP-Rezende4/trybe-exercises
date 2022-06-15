let piece = 'Rainha';
piece = piece.toLowerCase();

switch (piece) {
  case 'rei':
    console.log('Horizontal, vertical e diagonal somente uma casa de cada vez.');
    break;
  case 'rainha':
    console.log('Horizontal, vertical e diagonal.');
    break;
  case 'bispo':
    console.log('Diagonal.');
    break;
  case 'cavalo':
    console.log('Duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
    break;
  case 'torre':
    console.log('Horizontal ou vertical.');
    break;
  case 'peão':
    console.log('Apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.');
    break;
  default:
    console.log('Peça não identificada.');
}

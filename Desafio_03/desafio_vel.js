
console.log(verificarVelocidade(80));

function verificarVelocidade(velocidade){
  if(velocidade <= 70)
  return 'Velocidade normal'
  else {
    const pontos = ((velocidade - 70) / 5)
    if(pontos >= 12)
    return 'Carteira suspensa';
    else {
      return `Pontos ${pontos}` ;
    }
  }
}
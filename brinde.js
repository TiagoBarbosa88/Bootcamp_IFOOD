const valorPedido = 30;

function brinde() {
  if (valorPedido >= 50) {
    return `Parabéns, você ganhou uma sobremesa grátis!`;
  } else {
    return `Que pena, você não ganhou nenhum brinde especial.`;
  }
}

console.log(brinde())
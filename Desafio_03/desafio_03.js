const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quantos pedidos serão feitos? ', function(numPedidos) {
  let pedidos = [];
  for (let i = 0; i < numPedidos; i++) {
    let pedido = {};
    rl.question(`Nome do prato do pedido ${i+1}: `, function(nomePrato) {
      pedido.nomePrato = nomePrato;
      rl.question(`Quantidade de calorias do pedido ${i+1}: `, function(calorias) {
        pedido.calorias = calorias;
        rl.question(`O prato do pedido ${i+1} é vegano? (s/n) `, function(vegano) {
          pedido.vegano = (vegano.toLowerCase() === 's') ? 'Vegano' : 'Nao-vegano';
          pedidos.push(pedido);
          if (pedidos.length === parseInt(numPedidos)) {
            console.log('Pedidos:');
            for (let j = 0; j < pedidos.length; j++) {
              console.log(`Pedido ${j+1}: ${pedidos[j].nomePrato} (${pedidos[j].vegano}) - ${pedidos[j].calorias} calorias`);
            }
            rl.close();
          }
        });
      });
    });
  }
})
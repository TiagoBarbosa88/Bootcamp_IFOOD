/**
 * Obejtos
 * 
 */

// Objeto - Sem previsibilidade

let produto: object = {
  name: "Tiago",
  cidade: "sp",
  idade: 34,

}

// Objeto Tipado - Com previsibilidade 

type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
}

let meuProduto: ProdutoLoja = {
  nome: "Tenis",
  preco: 90,
  unidades: 5
}

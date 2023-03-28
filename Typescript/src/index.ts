class Api {
  @length(3)
  name: string;

  constructor(name: string){
    this.name = name;
  }
}

const api = new Api("Produtos")
console.log(api.name);

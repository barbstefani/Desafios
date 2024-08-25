class pilha {
  constructor() {
    this.nomes = [];
  }

  adicionar(nome) {
    this.nomes.push(nome);
    console.log(`${nome} foi adicionado`);
  }

  remover() {
    if (this.nomes.lenght === 0) {
      console.log("A pilha esta vazia");
    } else {
      const nomeRemovido = this.nomes.pop();
      console.log(`${nomeRemovido} foi removido.`);
      return nomeRemovido;
    }
  }

  verPilha() {
    if (this.nomes.length === 0) {
      console.log("A pilha esta vazia.");
    } else {
      console.log("Pilha atual:", this.nomes);
    }
  }
}

let pilha = new pilha();

pilha.adicionar("Barbara");
pilha.adicionar("Carolina");
pilha.adicionar("Ana");

pilha.verPilha();

pilha.remover();
pilha.remover();

pilha.verPilha();

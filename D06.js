class Fila {
    constructor() {
        this.nomes = [];
    }

    
    adicionar(nome) {
        this.nomes.push(nome);
        console.log(`${nome} foi adicionado à fila.`);
    }

    
    remover() {
        if (this.nomes.length === 0) {
            console.log("A fila está vazia");
        } else {
            const nomeRemovido = this.nomes.shift();
            console.log(`${nomeRemovido} foi removido da fila`);
            return nomeRemovido;
        }
    }

    
    verFila() {
        if (this.nomes.length === 0) {
            console.log("A fila está vazia");
        } else {
            console.log("Fila atual:", this.nomes);
        }
    }
}

let fila = new Fila();

fila.adicionar("Barbara");  
fila.adicionar("Carolina"); 
fila.adicionar("Ana"); 

fila.verFila(); 

fila.remover(); 
fila.remover();  

fila.verFila(); 

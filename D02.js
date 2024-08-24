

function numeroPosicao(numeroRecebido){
 const numeroInteiro = [ 1, 4, 5, 10, 120, 368]
 let encontrado = false;
 
    for(let i = 0; i < numeroInteiro.length; i++){

        if(numeroInteiro[i] == numeroRecebido){
            console.log('Numero encontrado na posição', i);
            encontrado = true;
            break;
        } 
    }
    
    if (!encontrado){
        console.log('Numero não encontrado');
    }

}

numeroPosicao(10);
function retornoIndex(objetivo) {
    let inteiros = [1, 2, 3, 4, 5];
    let mapaIndex = {}; 

    for (let i = 0; i < inteiros.length; i++) {
        let complemento = objetivo - inteiros[i];

        if (mapaIndex.hasOwnProperty(complemento)) {
            
            return [mapaIndex[complemento], i];
        }
        mapaIndex[inteiros[i]] = i;
    }
    return null;
}

let objetivo = 7;
let indices = retornoIndex(objetivo);

if (indices) {
    console.log(`Os índices são: ${indices[0]} e ${indices[1]}`);
} else {
    console.log("Nenhum par de números soma o objetivo.");
}

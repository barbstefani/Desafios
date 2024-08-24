


function numeroPorExtenso(numeroInteiro){

    const unidades = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];

    const dezenas = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];

    const centenas = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']; 

    const excecao = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];


    if(numeroInteiro < 10 ){
        return unidades[numeroInteiro];

    }else if(numeroInteiro < 20){
        return excecao[numeroInteiro - 10];

    }else if(numeroInteiro < 100){
        let dezena = Math.floor(numeroInteiro / 10);
        let unidade = numeroInteiro % 10;

        return (unidade === 0) ? dezenas[dezena] : `${dezenas[dezena]} e ${unidades[unidade]}`

    }else if(numeroInteiro < 1000){
        let centena = Math.floor(numeroInteiro / 100)
        let resto = numeroInteiro % 100;
        
        return (resto === 0) ? (centena === 1 ? 'cem' : centenas[centena]) : `${centenas[centena]} e ${numeroPorExtenso(resto)}`;

    }else if(numeroInteiro < 10000){
        let milhar = Math.floor(numeroInteiro / 1000)
        let resto = numeroInteiro % 1000; 
        let restoCentena = numeroInteiro % 100;

        return (milhar === 1) ? (resto === 0 ? 'mil' : `mil ${numeroPorExtenso(resto)}`) : (resto === 0 ? `${unidades[milhar]} mil` : (restoCentena === 0 ? `${unidades[milhar]} mil e ${numeroPorExtenso(resto)}` : `${unidades[milhar]} mil ${numeroPorExtenso(resto)}`));

    } else{
        return "Limite de casas decimais atingido ;)"
    }

}

console.log(0, '=>', numeroPorExtenso(0));      
console.log(7, '=>', numeroPorExtenso(7));      
console.log(13, '=>', numeroPorExtenso(13));    
console.log(20, '=>', numeroPorExtenso(20));    
console.log(84, '=>', numeroPorExtenso(84));    
console.log(100, '=>', numeroPorExtenso(100));  
console.log(569, '=>', numeroPorExtenso(569));  
console.log(1258, '=>', numeroPorExtenso(1258)); 
console.log(2200, '=>', numeroPorExtenso(2200)); 
console.log(1000, '=>', numeroPorExtenso(1000));
console.log(10000, '=>', numeroPorExtenso(10000));
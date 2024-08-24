function imc(peso, altura){
    
   let imcResultado = peso / (altura * altura);

if(imcResultado <= 18.4){
    console.log("Abaixo do peso: ", imcResultado);

} else if (imcResultado >= 18.5 && imcResultado <= 24.9){
    console.log("Peso normal: ", imcResultado);

} else if (imcResultado >= 25.0 && imcResultado <= 29.9){
    console.log("Sobrepeso: ", imcResultado);

}else{
    console.log("Obesidade: ", imcResultado);

}
}

imc(48.0, 1.68);
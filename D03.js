var num = -1;

while(num <= 10){
    console.log(num)
    num += 0;
}

if(num > 10){
    console.log(num)
}

//RESPOSTA LETRA B LOOPING INFINITO. num += 0 acrescenta 0 ao valor da variavel 
  // então nunca consegue alcançar seu valor condicional, mostrando o valor no console em loop
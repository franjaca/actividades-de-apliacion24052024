let entradaCorrecta=true;
 
do{
 
let numero1=Number(prompt("Introduce un número: "));
let simbolo=prompt("Introduce el simbolo de la operación (+, -, *, /):");
let numero2=Number(prompt("Introduce un número: "));
 
 
if (isNaN(numero1) || isNaN(numero2)){
    alert("Error al introducir el número");
    entradaCorrecta=false;
}else {
    let resultado;
 
    switch (simbolo) {
 
        case "+": resultado=numero1+numero2;
        break;
 
        case "-": resultado=numero1-numero2;
        break;
 
        case "*": resultado=numero1*numero2;
        break;
 
        case "/": resultado=numero1/numero2;
        break;
 
        default: console.log("Operación no válida");
    }
    console.log(`El resultado de la operación es: ${resultado}`);
 
    alert(resultado);
    entradaCorrecta:true;
 
}
 
}while(!entradaCorrecta)
const prompt = require('prompt-sync')();

let nota = parseInt(prompt("Introduzca una nota del 0 al 10: "));

if (nota >= 0 && nota <= 3){
    console.log("Insuficiente :C");
} else if (nota > 3 && nota < 5){
    console.log("Regular :(");
} else if (nota >= 5 && nota < 6){
    console.log("Suficiente :|");
} else if (nota >= 6 && nota < 7){
    console.log("Bien :)");
} else if (nota >= 7 && nota < 9) {
    console.log("Muy Bien ;)");
} else if (nota >= 9 && nota <= 10){
    console.log("¡Excelente! ;D");
} else {
    console.log("La nota no puede ser mayor que 10 o menor que 0");
}
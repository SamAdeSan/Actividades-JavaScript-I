const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt("Introduce el primer número entero: "));

let numero2 = parseInt(prompt("Introduce el segundo número entero: "));

if (numero1 > numero2) {
    console.log("El primer número (" + numero1 + ") es mayor que el segundo (" + numero2 + ").");
} else if (numero2 > numero1) {
    console.log("El segundo número (" + numero2 + ") es mayor que el primero (" + numero1 + ").");
} else {
    console.log("Ambos números son iguales.");
}

if (numero1 > 0 && numero2 > 0) {
    console.log("Ambos números son positivos.");
} else if (numero1 > 0 || numero2 > 0) {
    console.log("Al menos uno de los números es positivo.");
} else {
    console.log("Ninguno de los números es positivo.");
}

if (numero1 === 0 || numero2 === 0) {
    console.log("Al menos uno de los números es igual a cero.");
}
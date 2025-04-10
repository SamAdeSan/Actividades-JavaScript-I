const prompt = require('prompt-sync')();

let nombre, edad, nota;

saludar(prompt("Tu nombre: "));
mayoriaEdad(prompt("Tu edad: "));
calificacion(prompt("Tu nota: "));

function saludar() {
    console.log("¡Hola " + nombre + "!");
}

function mayoriaEdad() {
    if (edad < 18) {
        console.log("Eres menor de edad.");
    } else if (edad >= 18 < 65) {
        console.log("Eres adult@.");
    } else {
        console.log("Estás jubilad@.");
    }
}

function calificacion() {
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
}
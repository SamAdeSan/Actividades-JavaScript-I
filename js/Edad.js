const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Introduce tu edad: "));

if (edad < 18) {
    console.log("Eres menor de edad.");
} else if (edad >= 18 < 65) {
    console.log("Eres adult@.");
} else {
    console.log("Estás jubilad@.");
}
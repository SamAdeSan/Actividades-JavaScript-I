function numeroUsuario() {
    return parseInt(prompt("Dame un número: "));
}

function esMayor(num1, num2) {
    return num1 > num2;
}

let num1 = numeroUsuario();
let num2 = numeroUsuario();

while (esMayor(num1, num2)) {
    alert("El primero es mayor");
    num1 = numeroUsuario();
    num2 = numeroUsuario();
}

alert("El segundo es mayor. FIN de la ejecución");

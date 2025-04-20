const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
    'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
    'C', 'K', 'E', 'T'];

function pedirNumeroDNI() {
    let numero;
    do {
        numero = parseInt(prompt("Introduce tu número de DNI (sin letra):"));
    } while (isNaN(numero) || numero < 0 || numero > 99999999);
    return numero;
}

function pedirLetraDNI() {
    return prompt("Introduce la letra de tu DNI:").toUpperCase();
}

function calcularLetraDNI(numero) {
    const resto = numero % 23;
    return letras[resto];
}

function comprobarDNI() {
    const numero = pedirNumeroDNI();
    const letraUsuario = pedirLetraDNI();
    const letraCorrecta = calcularLetraDNI(numero);

    if (letraUsuario === letraCorrecta) {
        console.log("La letra del DNI es correcta.");
    } else {
        console.log("La letra del DNI es incorrecta. Debería ser: " + letraCorrecta);
    }
}

comprobarDNI();
for (let i = 0; i < 7; i++) {
    let linea = "";

    let caracter = (i % 2 === 0) ? "#" : "+";

    for (let j = 0; j <= i; j++) {
        linea += caracter;
    }
    console.log(linea);
}
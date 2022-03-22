const operador = process.argv[2];

const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

const operação = () => {
    switch (operador) {
        case "somar":
            console.log(num1 + num2);
            break;
        case "subtrair": 
            console.log(num1 - num2);
            break;
        case "multiplicar":
            console.log(num1 * num2);
            break;
        case "dividir":
            console.log(num1 / num2);
            break
    }
}

console.log(operação(operador, num1, num2))

// DESAFIO

if ( nome && idade ) {
    console.log(novaFrase)
} else if ( nome || idade) {
    console.log("Esperava 2 parâmetros, só recebi 1")
} else {
    console.log("Esperava 2 parâmetros, não recebi nenhum")
}
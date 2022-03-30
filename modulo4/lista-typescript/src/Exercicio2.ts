function qualTipo(input: number | string | boolean): string {
    return typeof(input)
}

console.log(qualTipo(2))
console.log(qualTipo("Qual a tua em código ??"))
console.log(qualTipo(true))

// Dessa maneira tudo será interpretado como string
// const input: number | string | boolean = process.argv[2]

// function qualTipo(input: number | string | boolean): string {
//     return typeof(input)
// }

// console.log(qualTipo(input))
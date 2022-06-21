/// EXERCÍCIOS DE INTERPRETAÇÃO

/* 1- Questão

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

/// Respostas

a. O primeiro console.log vai imprimir "10" e o segundo "50"
b. Ele vai ativar a function e fazer o calculo, porém o resultado não vai ser guardado em nenhuma var e nem mostrado

*/

/* 2- Questão !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

*/

/// EXERCÍCIOS DE ESCRITA

/* 1- Questão

const nome = prompt('Digite seu nome')
const idade = Number(prompt('Digite sua idade'))
const cidade = prompt('Onde você mora ?')
const profissao = prompt('Qual sua profissão ?')

function sobreMim(nome, idade, cidade, profissao) {
    return console.log(`Olá, eu sou o ${[nome]}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`)

}

console.log(sobreMim(nome, idade, cidade, profissao))

*/

/* 3 - Questão

function soma(numeroUm, numeroDois) {

    return numeroUm + numeroDois
}

function sub(numeroUm, numeroDois) {

    return numeroUm - numeroDois
}

function multi(numeroUm, numeroDois) {

    return numeroUm * numeroDois
}

function divisao(numeroUm, numeroDois) {

    return numeroUm / numeroDois
}

const numeroUm = Number(prompt('Digite o primeiro Número: '))
const numeroDois = Number(prompt('Digite o segundo Número: '))

console.log(`Números Inseridos: ${numeroUm} e ${numeroDois}`)
console.log(`Soma: `, soma(numeroUm, numeroDois))
console.log(`Diferença: `, sub(numeroUm, numeroDois))
console.log(`Multiplicação: `, multi(numeroUm, numeroDois))
console.log(`Divisão: `, divisao(numeroUm, numeroDois))

*/
// EXERCÍCIO DE INTERPRETAÇÃO

/* 1 - QUESTÃO
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// RESPOSTAS 

a) O código testa se o número é divisivel por 2, basicamente vê se é um número par ou impar.
b) Para números pares
c) Números impares

*/

/* 2 - QUESTÃO

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// RESPOSTAS

a) Para informar ao usuario o preço da fruta que ele escolher
b) "O preço da fruta, maça, é R$2.25"
c) Nada, o código continuará funcionando.

*/

/* 3 - QUESTÃO

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// RESPOSTAS

a) Recebendo um valor do tipo Number
b) Se for 10 o número passará no teste. Se for -10 o número não passara
c) Sim, a let 'mensagem' está fora do escopo.

*/

// EXERCÍCIO DE ESCRITA

/* 1 - QUESTÃO

const nome = prompt('Qual seu nome ? ')
const idade = Number(prompt('Qual sua idade ? '))

function idadeMinima() {
    if (idade >= 18) {
        console.log(`Parabéns, ${nome}, você pode dirigir!`)
    } else {
        console.log(`Infelizmente ${nome}, você ainda não tem idade para dirigir`)
    }
}

idadeMinima()

*/

/* 2 - QUESTÃO

alert("Digite qual turno você estuda")
const turno = prompt("M(matutino) / V(vespertino / N(Noturno)")

function boasVindas() {
    if (turno === "M") {
        console.log("Bom dia")
    } else if (turno === "V") {
        console.log("Boa Tarde")
    } else {
        console.log("Boa Noite")
    }
}

boasVindas()

*/

/* 3 - QUESTÃO

alert("Digite qual turno você estuda")
const turno = prompt("M(matutino) / V(vespertino / N(Noturno)")

function boasVindas(turno) {
    switch (turno) {
        case "M": "Bom dia!"
        break;
        case "V": "Boa tarde!"
        break;
        case "N": "Boa Noite!"
    }
}

boasVindas()

*/

/*  4 - QUESTÃO

const genero = prompt("Qual genero de filme você vai assistir ? ")

const preco = Number(prompt('Qual preço do ingresso ? '))

function filme() {
    if (genero === "fantasia" && preco <= 15) {
        console.log('Bom filme :) ')
    } else {
        console.log('Escolha outro filme :(')
    }
}

filme()

*/
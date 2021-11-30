/// QUESTÕES DE INTERPRETAÇÃO

/* Primeira Questão

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

/RESPOSTA

a. false;
b. false;
c. true;
d. boolean;

*/

/* Segunda Questão & Terceira Questão

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

/RESPOSTA

O problema no código está nas variaveis declaradas;
O propósito do código é de calcular dois números, por isso precisamos de valores do tipo Number;
A solução seria:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

Dessa forma o valor inserido pelo usuario já vai ser guardado como tipo "Number";
Assim qualquer tipo de operação que for feita depois com esses valores, não precisará usar o parseInt toda vez por exemplo.

*/

/// QUESTÕES DE ESCRITA 

// 1- Primeira Questão

/*

var userAge = Number(prompt("Qual sua idade? "))
var friendAge = Number(prompt("Qual a idade de seu Melhor Amigo ou Melhor Amiga? "))

var bigger = userAge > friendAge;

console.log("Sua idade é maior do que a de seu melhor amigo ?", bigger);

var difference = userAge - friendAge

console.log("A diferença da idade entre vocês é de: ", difference)

*/

// 2- Segunda Questão

/*

var par = Number(prompt('Insira um número par: '))

var divisão = par % 2

console.log(divisão)
//Nenhum número par que divido por 2 faça sobrar algum.
//Mas caso seja inserido um número impar, as coisas mudam.

*/

// 3- Terceira Questão

/* Eu não entendi se precisava ser de forma precisa ou não;
   Acredito que não por não pedir pro usuario inserir mês ou ano de nascimento */

/*

var idade = Number(prompt('Quantos anos você tem? '))

var meses = idade * 12
var dias = idade * 365
var segundos = idade * 31557600

console.log("Sua idade em meses é de: ", meses)
console.log("Sua idade em dias é de: ", dias)
console.log("Sua idade em segundos é de: ", segundos)

*/

// 4- Quarta Questão

/*

var numeroUm = Number(prompt('Digite um número: '))
var numeroDois = Number(prompt('Digite outro número: '))

var a = numeroUm > numeroDois
var b = numeroUm === numeroDois

var divisao = numeroUm % numeroDois
var c = divisao === 0

var divisaoDois = numeroDois % numeroUm
var d = divisaoDois === 0

console.log('O primeiro número é maior que o segundo? ', a)
console.log('O primeiro número é igual ao segundo? ', b)
console.log('O primeiro número é divisível pelo segundo? ', c)
console.log('O segundo número é divisível pelo primeiro? ', d)

*/
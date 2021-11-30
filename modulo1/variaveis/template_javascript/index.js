
//QUESTÕES INTERPRETATIVAS

/* PRIMEIRA QUESTÃO

let a = 10;
let b = 10;
console.log(b);
b = 5
console.log(a, b);

RESULTADO

No primeiro console.log irá aparecer o 10;
No segundo irá aparecer "10 5", por conta do novo valor atribuido no "b = 5";
*/

/* SEGUNDA QUESTÃO

let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c)

RESULTADO

Irá aparecer "10 10 10"; 
O valor de 10 atribuido a var "a" foi também transferida para a var "c";
Após isso o valor do var "b" foi trocado pelo valor da var "c";
E a linha "a = b" transfere o valor de "b" para "a", que já é 10;
*/

/* TERCEIRA QUESTÃO

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

RESPOSTA

let horasTrabalhadas = prompt(...)
let dinheiroRecebido = prompt(...)
*/

//QUESTÕES DE ESCRITA

var nome = prompt('Qual seu nome?')
var idade = prompt('Quantos anos você tem ?')

console.log(typeof nome);
console.log(typeof idade);

/* Por não ter sido especificado um tipo, o computador automaticamente entende qualquer valor inserido como string
Caso eu queira adicionar um numero especifico como number, precisaria indicar antes, ou transformar o valor com o "Number()"
*/

console.log("Olá", nome, "você tem", idade, "anos!")

 //////////////////////////////////////////////////////

 var homemAranha = prompt("Você vai assistir o novo filme do Homem Aranha?")
 var tresTomHolland = prompt("Você acredita que ira ter três Tom Hollands no filme ?")
 var tobeyAndrew = prompt("Você acredita que irá ter a participação dos antigos Miranha ?")

 console.log("Você vai assistir o novo filme do Homem Aranha ?", homemAranha)
 console.log("Você acredita que ira ter três Tom Hollands no filme ?", tresTomHolland)
 console.log("Você acredita que irá ter a participação dos antigos Miranha ?", tobeyAndrew)

 /////////////////////////////////////////////////

 let a = 10;
 let b = 25;

 let c = null;

 c = a;
 a = b;
 b = c;

 console.log("O novo valor de a é", a)
 console.log("O novo valor de b é", b)


 ////////////////////////////////////////////////

 // DESAFIO

 var primeiraCasa = Number(prompt("Digite o primeiro número"))
 var segundaCasa = Number(prompt("Digite o segundo número"))

 var soma = primeiraCasa + segundaCasa
 var multiplicado = primeiraCasa * segundaCasa

 console.log("A soma de", primeiraCasa, "com", segundaCasa, "é igual a ", soma)
 console.log("A multiplicação de", primeiraCasa, "com", segundaCasa, "é igual a ", multiplicado)
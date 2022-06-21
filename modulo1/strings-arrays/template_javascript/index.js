/// EXERCÍCIOS DE INTERPRETAÇÃO

/* 1- Questão

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

// RESPOSTAS

a. undefined;
b. null;
c. 11;
d. 3;
e. Uma array de "length" de 11;
f. 9;

*/

/* 2- Questão

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

/// RESPOSTAS

"SUBI NUM ÕNIBUS EM MIRROCOS 27"

*/

/// EXERCÍCIOS DE ESCRITA

/* 1- Questão 

const nomeDoUsuario = prompt('Digite o nome de usúario')
const emailDoUsuario = prompt('Digite seu email')

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

*/

/* 2- Questão

const comidas = ['pizza', 'chocolate', 'refrigerante', 'café', 'água']

console.log(comidas)

console.log(`Essas são as minhas comidas preferidas: `)
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

const novaComida = prompt('Fale uma comida que você gosta ')

comidas[1] = novaComida;

console.log(comidas)

*/

/* 3- Questão

const listaDeTarefas = []

let primeiraTarefa = prompt('Digite a primeira tarefa que você tem pra hoje: ')
let segundaTarefa = prompt('Digite a segunda tarefa que você tem pra hoje: ')
let terceiraTarefa = prompt('Digite a terceira tarefa que você tem pra hoje: ')

var adicionar = listaDeTarefas.push(primeiraTarefa, segundaTarefa, terceiraTarefa)

console.log(listaDeTarefas)

const tarefaRealizada = Number(prompt('Qual dessas tarefas já foi concluida ? '))

var removerTarefa = listaDeTarefas.splice(tarefaRealizada)

console.log(listaDeTarefas)

*/

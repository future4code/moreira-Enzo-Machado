// EXERCÍCIOS DE INTERPRETAÇÃO

/* 1 - Questão

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// RESPOSTAS 

a. 'Matheus Nachtergaele'
b. 'Virgínia Cavendish'
c. 'Globo, 14h'

*/

/* 2 - Questão

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// RESPOSTAS

a) Vai ser impresso as informações de cada objeto, respectivamente
    - idade 3 - nome "Juca" - Raça "SRD"
    - idade 3 - nome "Juba" - raça "SRD"
    - idade 3 - nome "Jubo" - raça "SRD"

b) Serve para clonar ou acessar tal object
 
*/

/* 3 - Questão

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// RESPOSTAS

a) O primeiro console.log retorna "false" e o segundo undefined
b) O valor do segundo console.log retornou como undefined pois não tem a propriedade altura no object

*/

// EXERCÍCIO DE ESCRITA


/* 1 - QUESTÃO

const pessoa = {
    nome: "Enzo",
    apelidos: ["Nobary", "Ninguém", "Nazagem"]
}

function frase(pessoa) {
    return `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`
}

console.log(frase(pessoa))

*/

/* 

const pessoa = {
    nome: "Enzo",
    idade: 19,
    profissao: "Estudante"
}

function info(pessoa) {
    return pessoa
}
console.log(pessoa)

*/
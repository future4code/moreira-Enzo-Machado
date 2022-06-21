// INTERPRETATIVAS

/* 1 - QUESTÃO

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

// RESPOSTA
-> O console vai contar até 4, então vai parar o processo da 'for

*/

// /////////////////////////////////////////////////////////////////////

/* 2- QUESTÃO

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

// RESPOSTA 
a) Todos os números após o 18; [19, 21, 23, 25, 27, 30]
b) Sim, mas q trabalho seria.

*/

// ///////////////////////////////////////////////////////////////////////

/* 3 - QUESTÃO

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// RESPOSTAS
-> Seria impresso 4 linhas crescentes de *.

*/

// ESCRITAS

/* 1 - QUESTÃO

const pets = Number(prompt('Quantos pets você tem ? '))
const arrayPets = []


if (pets == 0) {
    console.log('Af, você podia adotar um pet!')
} else {
    alert('QUE MASSA, qual o nome deles ? ')
    let nomes = 0
    for (let nomes = 0; nomes < pets; nomes++) {
        let qualNome = prompt('Qual nome do seu pet ? ')
        arrayPets.push(qualNome)
    } 
    console.log(arrayPets)

}

*/

// 2 - QUESTÃO

const arraySuprema = [60, 56, 26, 69, 22, 71, 40, 79]

// a)

/*

let i = 0

for (let i = 0; i < arraySuprema.length; i++) {
  console.log(arraySuprema[i])
}

*/

// b)

/*

for (let j = 0; j < arraySuprema.length; j++) {
  let divide = arraySuprema[j]
  let dividido = divide / 10;
  console.log(`O ${arraySuprema[j]} dividido por 10 é ${dividido}`)
}

*/

// c)

/*
function numerosPares() {
  const arrayPares = []

  for (let n = 0; n < arraySuprema.length; n++) {
    let divide = arraySuprema[n]
    let divisao = divide % 2

    if (divisao === 0) {
      arrayPares.push(arraySuprema[n])
    }
  }

  return arrayPares
}

console.log(numerosPares())
*/

// d)

/*
const arrayIndice = []


for (let b = 0; b < arraySuprema.length; b++) {
    arrayIndice.push(`O elemento do índex ${b} é ${arraySuprema[b]}`)
  }

console.log(arrayIndice)

for (let u = 0; u < arrayIndice.length; u++) {
  console.log(arrayIndice[u])
}
*/
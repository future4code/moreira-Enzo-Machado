// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt('Digite altura'))
  const largura = Number(prompt('Digite a largura'))

  const area = altura * largura
  console.log(area)

}

// /* EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('Digite o ano em que estamos: '))
  const anoNascido = Number(prompt('Digite o ano em que nasceu: '))
  let idade = anoAtual - anoNascido
  console.log(idade)
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura);

}

// /* EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite seu nome: ')
  const idade = Number(prompt('Digite sua idade: '))
  const email = prompt('Digite seu email favorito: ')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const coresFavoritas = []

  const cor1 = prompt('Digite sua primeira cor favorita: ')
  coresFavoritas.push(cor1)
  const cor2 = prompt('Digite sua segunda cor favorita: ')
  coresFavoritas.push(cor2)
  const cor3 = prompt('Digite sua terceira cor favorita: ')
  coresFavoritas.push(cor3)

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const normal = prompt('Digite uma frase: ')

  return normal.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return (string1 >= string2)

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const total = array.length
  const qual = total - 1

  return array[qual]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
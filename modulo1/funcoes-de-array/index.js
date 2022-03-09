

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1 - 
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]
// const novoArrayA = usuarios.map((item, index, array) => {
//    console.log(item, index, array)
// })
// 
// RESPOSTA - Vai ser impresso no console 3 novos objetos com as informações 
//            de cada pessoa em um.


// 2 - 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

// RESPOSTA - novoArrayB apenas com os nomes de cada objeto.

// // 3 -
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// RESPOSTA - novaArrayC com todos os objetos que não tenham "Chijo" como apelido.



// EXERCÍCIOS DE ESCRITA DE CÓDIGO

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  EXERCÍCIO 1 
// a) 
 const petsName = pets.map((item, index, array) => {
     return item.nome;
 })

 console.log(petsName)

// b)
 const petsSalsicha = pets.filter((item, index, array) => {
     return item.nome, item.raca == "Salsicha"
 })

 console.log(petsSalsicha)

// c)
const poodleCupom = pets.filter((item) => {
    return item.raca == "Poodle"
}).map((item) => {
    return `Parabéns, você ganhou um cupom de desconto de 10% para tosar o ${item.nome}`
})

console.log(poodleCupom)

// EXERCÍCIO 2 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a)
const produtosNome = produtos.map((item) => {
    return item.nome
})
console.log(produtosNome)

// b 

// ERRO 

// c)
const bebidas = produtos.filter((item) => {
    return item.nome, item.categoria == "Bebidas"
})
console.log(bebidas)

// d)
const ype = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
console.log(ype)

// e)
const nomePreco = produtos.map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})
console.log(nomePreco)

// DESAFIO
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

// a)
const pokemonAlfab = pokemons.map((item) => {
    return item.nome
})
console.log(pokemonAlfab.sort())

// b)

// NÃO CONSEGUI
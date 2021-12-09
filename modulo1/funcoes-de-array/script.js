// EXERCÍCIOS DE INTERPRETAÇÃO

/* 1 - QUESTÃO

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

// RESPOSTA
-> Vai ser dividido em 3 objetos diferentes as informações de cada usuario.

*/

/*

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

// RESPOSTA
-> Ele vai imprimir no console apenas os nomes dos úsuarios.

*/

/* 3 - QUESTÃO

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

// RESPOSTAS
-> Como ele especificou, irá apresentar na array apenas os usuarios com o apelido diferente de 'Chijo'

*/

// //////////////////////////////////////////////////////////////////

// EXERCÍCIO DE ESCRITA

// 1 - QUESTÃO

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

/* a)
const nomePets = pets.map((item, index, array) => {
    return item.nome
})

console.log(nomePets)
*/

/* b)
const salsichas = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})

console.log(salsichas)
*/

// c) --- NÃO FEITA



// 2 - QUESTÃO

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

/* a)
const nomeProdutos = produtos.map((item, index, array) => {
    return item.nome
})

console.log(nomeProdutos)
*/

// b) --------------------

/* c)
const produtosDeBeber = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})

console.log(produtosDeBeber)
*/

/* d)
const produtosYpes = produtos.filter((item, indice, vetor) => {
    return item.nome.includes("Ypê")
})
console.log(produtosYpes)
*/

// e)
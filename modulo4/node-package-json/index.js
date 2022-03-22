// EXERCÍCIO 1
// a) Utilizando a propriedade 'process.argv'

// b) 

const nome = process.argv[2];
const idade = process.argv[3];

const frase = `Olá, ${nome}! Você têm ${idade} anos, certo ?`

console.log(frase)

// c)

const novaIdade = Number(idade) + 7;

const novaFrase = `Olá, ${nome}! Você agora tem ${idade} anos. Em sete anos você terá ${novaIdade}`

console.log(novaFrase)
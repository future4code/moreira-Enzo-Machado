// 1 Questão
// a)
const minhaString:string = "Here comes the sun"
// Ao tentar atribuir um número o sistema alerta o erro de atribuição de tipo.

// b)
const meuNumero:number = 24
// Utilizando do Union Type e adicionando o comparador e o tipo aceito
// Ex.: const meuNumero: number|string = 'aceitando entao os dois tipos'

// c)
const pessoa: {nome: string, idade: number, corFavorita: string} = {
    nome: "Luna",
    idade: 18,
    corFavorita: "Preto"
}

// d)

enum rainbowColors {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    AZULESCULO = "anil",
    VIOLETA = "violeta"
}

const novaPessoa: {nome: string, idade: number, corFavorita: rainbowColors} = {
    nome: "Isabel",
    idade: 64,
    corFavorita: rainbowColors.AZUL
}


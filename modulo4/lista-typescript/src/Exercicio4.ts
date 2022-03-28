enum Setores {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type colaboradores = {
    nome: string,
    salario: number,
    setor: Setores,
    presencial: boolean
}

const pessoas: colaboradores[] = 
[
	{ nome: "Marcos", salario: 2500, setor: Setores.MARKETING, presencial: true },
	{ nome: "Maria" , salario: 1500, setor: Setores.VENDAS, presencial: false},
	{ nome: "Salete" , salario: 2200, setor: Setores.FINANCEIRO, presencial: true},
	{ nome: "João" , salario: 2800, setor: Setores.MARKETING, presencial: false},
	{ nome: "Josué" , salario: 5500, setor: Setores.FINANCEIRO, presencial: true},
	{ nome: "Natalia" , salario: 4700, setor: Setores.VENDAS, presencial: true},
	{ nome: "Paola" , salario: 3500, setor: Setores.MARKETING, presencial: true }
]

function recebeColaboradores (colabs: colaboradores[]): colaboradores[] {
    const pessoaFilter = colabs.filter((colab) => {
        return colab.setor === Setores.MARKETING && colab.presencial === true
    })
    return pessoaFilter
}

console.log(recebeColaboradores(pessoas))

enum GENERO {
    ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type bioFilmes = {
    nome: string,
    ano: number,
    genero: GENERO,
    nota?: number
}

function filmes (filme:bioFilmes): bioFilmes {
    return filme
}

console.log(filmes({nome: "Red", ano: 2022, genero: GENERO.DRAMA, nota: 10}))
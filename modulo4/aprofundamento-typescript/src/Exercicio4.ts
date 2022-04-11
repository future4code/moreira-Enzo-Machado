// 4 Questão

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Usando o comando 'tsc'
// b) Especificaria no tsconfig o caminho da entrada e saida
// c) Podemos listar os arquivos, especificando quais transpilar. Ou usando o 'tsc' no geral que ele transpirara todos
enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}
  
function catalogaFilme(nome: string, ano: number, genero: GENERO, pontuacao?: number) : object {
  const filme = {
    nome: nome,
    anoLancamento: ano,
    genero: genero,
    pontuacao: pontuacao,
  };
  
  return filme;
}
  
console.log(catalogaFilme("Homem Aranha Sem Volta ao Lar", 2021, GENERO.ACAO, 100));
console.log(catalogaFilme("Duna", 2021, GENERO.ACAO, ));
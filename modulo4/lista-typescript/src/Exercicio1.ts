function nomeDate (nome:string, data:string) {
    const formataData = data.split("/")

    return `Olá me chamo ${nome}, nasci no dia ${formataData[0]} do mês de ${formataData[1]} do ano de ${formataData[2]}`
}

console.log(nomeDate("Enzo", "21/01/2002"))
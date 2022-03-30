const nome: string = process.argv[2];
const data: string = process.argv[3];

function aprText (nome:string, data:string): string {
    const datafor = data.split("/")
    return `Olá, me chamo ${nome}, nasci no dia ${datafor[0]} do mês de ${datafor[1]} do ano de ${datafor[2]}`
}

console.log(aprText(nome, data))
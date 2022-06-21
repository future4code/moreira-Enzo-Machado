

function checaRenovacaoRg():boolean {

    let anoAtual:number = Number(process.argv[2])
    let anoNascimento:number = Number(process.argv[3])
    let anoEmissao:number = Number(process.argv[4])

    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao

    let cond1:boolean = idade <= 20 && tempoCarteira >=5
    let cond2:boolean = idade > 20 && idade <= 50 && tempoCarteira >=10
    let cond3:boolean = idade > 50 && tempoCarteira >=15

    return(cond1||cond2||cond3)

    
}

console.log(checaRenovacaoRg);
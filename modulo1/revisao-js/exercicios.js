// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  var yarra = array.slice(0).reverse()
  return yarra
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a- b)
}



// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPar = []

    for (i = 0; i < array.length; i++) {
        let dividir = array[i] % 2 
        if (dividir === 0) {
            arrayPar.push(array[i])
        }
    }
    return arrayPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   let arrayElevada = []

   for (i = 0; i < array.length; i++) {
       if (array[i] % 2 === 0) {
           let elevado = Math.pow(array[i], 2)
           arrayElevada.push(elevado)
       }
   }
   return arrayElevada
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const max = Math.max(...array)
    return max
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = Math.max(num1, num2)
    let maiorDivisivelPorMenor = (num2 % num1 === 0)
    let menorNumero = Math.min(num1, num2)
    let diferenca = maiorNumero - menorNumero

    // return `{maiorNumero:${maiorNumero},maiorDivisivelPorMenor:${maiorDivisivelPorMenor},diferenca:${diferenca}}`
    return {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = [];
   for (let i = 0; numerosPares.length < n; i++) {
       if (i % 2 === 0) {
           numerosPares.push(i)
       }
   }
   return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
        const equilatero = "Equilátero"
        return equilatero
    } else if (ladoA !== ladoB && ladoA === ladoC && ladoB !== ladoC) {
        const isosceles = "Isósceles"
        return isosceles
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        const escaleno = "Escaleno"
        return escaleno
    } else if (ladoA === ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        const isosceles = "Isósceles"
        return isosceles
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB === ladoC) {
        const isosceles = "Isósceles" 
        return isosceles
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   Object.defineProperty(pessoa, nome, "ANÔNIMO")
   return pessoa()
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let accessGranted = pessoas.filter(
       (item) => item.altura > 1.5 && item.idade > 14 && item.idade < 60
   )
   return accessGranted
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach((contaCliente) => {
        let totalDeCompras = 0

        contaCliente.compras.forEach((gasto) => {
            totalDeCompras = totalDeCompras + gasto
        })

        contaCliente.saldoTotal = contaCliente.saldoTotal-totalDeCompras
        contaCliente.compras = []

    })
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
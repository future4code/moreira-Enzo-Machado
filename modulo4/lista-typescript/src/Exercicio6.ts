type Client = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientList: Array<Client> = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function AnalyzeClient(clientes: Array<Client>) : Client[] {
    const verifyDeb = clientes.map((cliente) => {
        const debitoTotal = cliente.debitos.reduce((total, valor) => {
            return total += valor
        }, 0)
        cliente.saldoTotal -= debitoTotal
        return cliente
    }).filter((cliente) => {
        cliente.debitos = []
        return cliente.saldoTotal < 0
    })

    return verifyDeb
}

console.log(AnalyzeClient(clientList))
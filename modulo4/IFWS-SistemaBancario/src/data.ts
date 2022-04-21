export type Transaction = {
    value: number,
    date: Date,
    description: string
}


export type Account = {
    name: string,
    CPF: string,
    nascimento: Date,
    balance: number,
    statement: Array<Transaction>
}

export const accounts: Account[] = []

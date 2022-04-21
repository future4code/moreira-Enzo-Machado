import express, {Request, Response, Express} from "express"
import cors from "cors"
import {AddressInfo} from "net"
import { accounts } from "./data"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users", (req:Request, res:Response) => {
    try {
        const {name, CPF, nascimentoString } = req.body

        const [day, month, year] = nascimentoString.split("/")

        const nascimento: Date = new Date(`${year}-${month}-${day}`)

        const ageMs:number = Date.now() - nascimento.getTime()

        const ageYears:number = ageMs / 1000 / 60 / 60 / 24 / 365

        if(ageYears < 18) {
            res.statusCode = 406
            throw new Error("Idade menor que o necessário!")
        }
        accounts.push({
            name,
            CPF,
            nascimento,
            balance: 0,
            statement: []
        })

        res.status(201).send("Conta criada com sucesso!")
    } catch (error) {
        console.log(error)
    }
})

app.get("/users/all", (req:Request, res:Response)=> {
    try {
        if(!accounts.length) {
            res.statusCode = 404;
            throw new Error("Nenhuma conta encontrada!")
        }
        res.status(200).send(accounts)
    } catch (error) {

    }
})

app.listen(3003, ()=> {
    console.log("servidor rodando")
})
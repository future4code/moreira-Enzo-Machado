import {Request, Response} from 'express'
import insertUser from '../data/insertUser'

export default async function createUser(
    req:Request,
    res:Response
){
    try{

        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email 
        ) {
            res.status(400).send('Prencha os campos corretamente')
        }

        // Transforma em id a data atual mais um número aleatorio
        // para evitar erros de coincidencia
        const id = Date.now() + Math.random().toString()

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.status(200).send('User criado com sucesso!')

    } catch (error:any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
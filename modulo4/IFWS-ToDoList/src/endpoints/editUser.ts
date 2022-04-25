import { Request, Response } from 'express'
import updateUser from '../data/updateUser'

export default async function editUser(
    req:Request,
    res:Response
) {
    try {
        
        if(
            req.body.name === '' ||
            req.body.nickname === '' ||
            req.body.email === ''
        ) {
            res.status(400).send({message:"Preencha todos os campos corretamente"})
        }

        if(!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send({message: "Escolha pelo menos um campo para alterar"})
        }

        await updateUser(
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.status(200).send({message: "Informação atualizada"})


    } catch (error:any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
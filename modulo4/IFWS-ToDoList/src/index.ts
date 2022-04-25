import express from 'express'
import knex from 'knex'
import dotenv from 'dotenv'


import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'
import editUser from './endpoints/editUser'

dotenv.config()

const app = express()

app.use(express.json())
app.put('/user', createUser)
app.get('/user/:id', getUserById)
app.post('/users/edit/:id', editUser)

app.listen(3003, ()=> {
    console.log('Servidor rodando na porta 3003')
})

import connection from "../connection"


export default async function selectUserById(
    id:string
) {
    const retorno = await connection('to_do_list_users')
    .select('*')
    .where({id})

    return retorno[0]
}
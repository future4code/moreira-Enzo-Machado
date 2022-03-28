const users: user[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

type user = {
    name: string,
    email: string,
    role: string
}

function retornaAdm (adm: user[]): string[] {
    const admFilter = adm.filter((ad) => {
        return ad.role === "adm"
    })

    const admMap = admFilter.map((ad) => {
        return ad.email
    })

    return admMap

}

console.log(retornaAdm(users))
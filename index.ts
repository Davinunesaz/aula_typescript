// if e else feito com obj
const TypeUser = {
    admin: "fala viado",
    estudante: "fala sua desgraça",
    vierwer: "fala seu corno"
}

function validarUser(user: string){
    console.log(TypeUser[user as keyof typeof TypeUser]) // a variavel [user] pode ser usada como chave do obj typeuser
}

const usuario = "admin"

validarUser(usuario)
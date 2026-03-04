class account{
    name: string
    acconutNumber: number

    constructor(name: string, acconutNumber: number){
        this.name  = name
        this.acconutNumber = acconutNumber
    }

    deposit = () =>{
        console.log("vc depositou seu corno")
    }

    saque = () =>{
    console.log("vc sacou seu bobinho")
    }
}
// classe admin vai ser filho de account
class Admin extends account { 
  balance: number

    constructor(name: string, accountNumber: number ){
        super(name, accountNumber) //estou chamando os parametros da classe pai que e account
         this.balance = 20
    }

    getbalance = () =>{
        console.log( this.balance)
    }
}

const adminAccount: Admin = new Admin("daviu",28) // preciso passar os  valores tbm da classe pai
console.log(adminAccount)


const outroAcconut: account = new account('ester',28)
console.log(outroAcconut)


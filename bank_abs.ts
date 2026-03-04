abstract class account{
    name: string
    acconutNumber: number
    balance: number = 0

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

     getbalance = () =>{
        console.log( this.balance)
    }
}

class pessoaAccount extends account{
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number){ 
        super(name, accountNumber)
       this.doc_id = doc_id
    }
}

const pessoa: pessoaAccount = new pessoaAccount(1,"davi",10)
console.log(pessoa)
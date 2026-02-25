class User {
    name: string = "davi"
    age: number = 22

    // this acessa a propriade declarada desse obj
    constructor(name: string, age:number){
        this.name = name
        this.age = age
    }
// metodos
       ShoewName = () =>{
        console.log(this.name)
       }
}

const user = new User("ester", 19)
user.ShoewName()
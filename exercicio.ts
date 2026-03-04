class Produto{
    name: string
    valor: number
    
    constructor(name:string, valor:number){
    this.name = name
    this.valor = valor
    }

    ShowDetalhes = () =>{
        console.log(this.name,this.valor)
    }
    
    applyDiscount = (percentual: number) =>{
     const desconto = this.valor * (percentual/ 100)
     console.log( this.valor - desconto)
    }
     
}

const produto1: Produto = new Produto("teclado",50)
produto1.applyDiscount(5)



interface Pessoa  {
  nome: string,
  idade:number
}

const pessoa: Pessoa ={
    nome: "davi",
    idade: 22
}

const outraPessoa: Pessoa ={
    nome: "ester",
    idade: 19
}

/*estou declarando que a variavel arryPessoa vai receber um arry com objetos do tipo pessoa
const arryPessoa: Pessoa[] = [
    pessoa,
    outraPessoa
]
*/

//faz a mesma coisa que o de cima
const arryPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

//tipagem de arrys

const arryNum: number[] = [
    1,2,3
]
const arrString: Array<string> = [
    '1','2','3'
]
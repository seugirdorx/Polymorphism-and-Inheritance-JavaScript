export class Paciente {
    nome: string;
    alta: string;
    internacao: string;

    constructor (
    nome: string,
    alta: string,
    internacao: string
){
    this.nome = nome
    this.alta = alta
    this.internacao = internacao
}
VerInfo(){
    console.log (`O nome do paciente é: ${this.nome}
    A data da alta: ${this.alta}
    A data de internação é: ${this.internacao}`)
}

}
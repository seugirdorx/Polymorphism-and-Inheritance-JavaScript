export class Cliente {
    cpf: string;
    fidelidade: string;
    contato: string
    nome: string;

    constructor(
       cpf: string,
       fidelidade: string,
       contato: string,
       nome: string
) {
    this.cpf = cpf;
    this.fidelidade = fidelidade;
    this.contato = contato;
    this.nome = nome;
}
    Informacao (){
        console.log (`Aqui está todas as informações do cliente armazenados em nosso sistema:
        Nome: ${this.nome}
        Cpf: ${this.cpf}
        Fidelidade: ${this.fidelidade}
        Contato: ${this.contato}`)
    }
}

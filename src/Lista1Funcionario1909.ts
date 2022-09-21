export class Funcionario{
    codigo: number;
    salario: number;
    funcao: string;
    carteira: string;

    constructor (
        codigo: number,
        salario: number,
        funcao: string,
        carteira: string   
) {
    this.codigo = codigo
    this.salario = salario
    this.funcao = funcao
    this.carteira = carteira
}
VerInfo(){
    console.log (`Aqui está as informações do funcionário armazenadas em nosso sistema:
    Código do funcionário: ${this.codigo}
    Salário: ${this.salario}
    Função: ${this.funcao}
    Número da carteira de trabalho: ${this.carteira}`)
}

}
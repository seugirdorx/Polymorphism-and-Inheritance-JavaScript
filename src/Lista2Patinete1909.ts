export class Patinete{
    modelo: string
    cor: string
    aro: number

    constructor(
    modelo: string,
    cor: string,
    aro: number
){
    this.modelo = modelo
    this.cor = cor
    this.aro = aro
}
 VerInfo(){
    console.log (`O modelo do patinete é: ${this.modelo}
    A cor do patinete é: ${this.cor}
    O tamanho do aro é: ${this.aro}`);
 }
 Correr(){
    console.log (`Estou andando com meu patinete irado`);
 }

}
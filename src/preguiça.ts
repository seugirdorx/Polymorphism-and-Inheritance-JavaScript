import { Animal } from "./animal";

export class Preguica extends Animal{

    constructor(
    nome: string,
    idade: number
){
    super (nome, idade)
    this.nome = nome
    this.idade = idade
}
EmitirSom(): void {
    console.log (`cronc cronc`);
}
SubiremArvores(): void {
    console.log (`Subindo lentamente a árvore`);
}
}

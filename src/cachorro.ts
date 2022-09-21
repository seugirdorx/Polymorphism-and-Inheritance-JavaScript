import { Animal } from "./animal";

export class Cachorro extends Animal{

    constructor(
    nome: string,
    idade: number
){
    super (nome, idade)
    this.nome = nome
    this.idade = idade
}
EmitirSom(): void {
    console.log (`Auau`);
}
Correr(): void {
    console.log (`Correndo igual cachorro`);
}
}

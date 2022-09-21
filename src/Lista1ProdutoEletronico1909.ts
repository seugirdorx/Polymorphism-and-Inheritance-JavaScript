export class ProdutoEletronico {
    material: string;
    voltagem: string;
    preco: number;
    marca: string;

    constructor (
        material: string,
        voltagem: string,
        preco: number,
        marca: string,
){
    this.material = material
    this.voltagem = voltagem
    this.preco = preco
    this.marca = marca
}
Produto(){
    console.log (`O tipo de material do produto é: ${this.material}
    A voltagem é: ${this.voltagem}
    O valor do produto é: ${this.preco}
    Marca do produto: ${this.marca}`)
    
}

}
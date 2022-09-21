export class Aviao {
    gasolina: number;
    registro: string;
    passageiros: number;
    peso: number;

    constructor (
        gasolina: number,
        registro: string,
        passageiros: number,
        peso: number
    ){
        this.gasolina = gasolina;
        this.registro = registro;
        this.passageiros = passageiros;
        this.peso = peso;
    
}



ChecarGasolina(litro: number){
    this.gasolina
    if (litro < 3000){
        console.log(`Este avião está incapaz de decolar devido a insuficiência de gasolina. Nível atual de gasolina presente no tanque: ${litro}`);
    }else {
        console.log (`Este avião está pronto para decolar!`);
    }

}
ChecarPassageiro(pessoas: number){
    this.passageiros
    if (pessoas < 300){
        console.log(`O número de passageiros está muito baixo, o avião fica impossibilitado de decolar. Número de passageiros: ${pessoas}`);
    } else if (pessoas > 300){
        console.log (`O número de passageiros ultrapassou o limite permitido, não há assentos disponíveis para todos. O avião está impossibilitado de decolar. Número de passageiros: ${pessoas}`);
    } else {
        console.log (`O número de passageiros está dentro do limite permitido, o avião está pronto para a decolagem. Número de passageiros: ${pessoas}`);
    }
}
ChecarPeso (tonelada: number){
    this.peso
    if (tonelada > 500){
        console.log (`O peso atual do avião ultrapassou o limite permitido. O avião está impossibilitado de decolar. Peso do avião: ${tonelada}`);
    } else {
        console.log (`O peso do avião está dentro dos padrões permitidos. O avião está pronto para a decolagem. Peso do avião: ${tonelada}`);
    }
}
ChecarRegistro (codigo: string){
    this.registro
    if (codigo != "pt-mud"){
        console.log (`O código de registro do avião não está registrado em nosso sistema. O avião está impossibilitado de decolar. Código do avião: ${codigo}`);
    }else{
        console.log (`O cógido do avião está registrado em nosso sistema. O avião está pronto para decolagem. Código do avião: ${codigo}`);
    }
}

    }


    


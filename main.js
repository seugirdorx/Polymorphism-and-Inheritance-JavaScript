"use strict";
/*import { Pessoa } from "./SRC/pessoa";

let pessoaUm = new Pessoa();

pessoaUm.nome = "Debora / Pekky";
pessoaUm.cpf = "235.568.695-38";
pessoaUm.idade = 18;
pessoaUm.telefone = "(21)98456-8147";

console.log (`nome da pessoa é: ${pessoaUm.nome}`);*/
exports.__esModule = true;
var contaBanco_1 = require("./SRC/contaBanco");
var conta1 = new contaBanco_1.ContaBanco("Liza", "005-4", "4002-52", 500);
conta1.deposito(500);
conta1.verSaldo();
conta1.sacar(2000);
conta1.verSaldo();
//console.log (conta1.saldo);

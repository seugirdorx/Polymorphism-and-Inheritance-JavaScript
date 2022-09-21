import { ContaBancaria } from "./SRC/Lista2ContaBancaria1909";

let conta1 = new ContaBancaria ("Amanda", "123-06", "123-456", 7000)

conta1.verSaldo();
conta1.sacar(200);
conta1.verSaldo()
conta1.deposito(7000);
conta1.verSaldo();
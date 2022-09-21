import { Cachorro } from "./SRC/cachorro";
import { Cavalo } from "./SRC/cavalo";
import { Preguica } from "./SRC/preguiça";


let cachorro1 = new Cachorro ("Bartolomeu", 6);
let cavalo1 = new Cavalo ("Pocotó", 15);
let preguiça1 = new Preguica ("Pepé", 12);

cachorro1.Correr();
cachorro1.EmitirSom();
cavalo1.Correr();
cavalo1.EmitirSom();
preguiça1.EmitirSom();
preguiça1.SubiremArvores();
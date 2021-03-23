import { Docente } from "../proficionaisMedicina/Docentes";
import CriadorProficionaisMedicina from "./CriadorProficionaisMedicina";

export class CriadorDocente extends CriadorProficionaisMedicina{
    criarProficional(): Docente{
        return new Docente();
    }
}
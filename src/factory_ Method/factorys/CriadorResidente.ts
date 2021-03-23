import { Residente } from "../proficionaisMedicina/Residente";
import CriadorProficionaisMedicina from "./CriadorProficionaisMedicina";

export class CriadorResidente extends CriadorProficionaisMedicina{
    criarProficional():Residente{
        return new Residente();
    }
}
import { Medico } from '../proficionaisMedicina/Medico';
import CriadorProficionaisMedicina from './CriadorProficionaisMedicina';
export class CriadorMedico extends CriadorProficionaisMedicina {
  criarProficional(): Medico {
    return new Medico();
  }
}

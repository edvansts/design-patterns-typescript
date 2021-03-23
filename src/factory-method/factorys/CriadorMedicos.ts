import { Medico } from '../proficionaisMedicina/Medico';
import CriadorProficionaisMedicina from './CriadorProficionaisMedicina';
export class CriadorMedico extends CriadorProficionaisMedicina {
  criarProficional(nome : string, CRM : string): Medico {
    return new Medico(nome , CRM);
  }
}

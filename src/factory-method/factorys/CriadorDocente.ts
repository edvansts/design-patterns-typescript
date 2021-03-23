import { Docente } from '../proficionaisMedicina/Docentes';
import CriadorProficionaisMedicina from './CriadorProficionaisMedicina';
export class CriadorDocente extends CriadorProficionaisMedicina {
  
  criarProficional(nome : string, CRM : string, anyValuey : number ,titulacao : string): Docente {
    return new Docente(nome , CRM ,titulacao);
  }
}

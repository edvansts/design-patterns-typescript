import { Residente } from '../proficionaisMedicina/Residente';
import CriadorProficionaisMedicina from './CriadorProficionaisMedicina';

export class CriadorResidente extends CriadorProficionaisMedicina {
    criarProficional(nome :string , CRM : string, ano: number): Residente {
    let NovoAno = Number(ano);
      return new Residente(nome,CRM,NovoAno);
  }
}

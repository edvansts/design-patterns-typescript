import Exame, { tipo } from '../../prototype/exame/Exame';
import Laudo from '../../prototype/laudo/Laudo';
import Paciente from '../../prototype/paciente/Paciente';
import ProficionaisMedicina from './ProficionaisMedicina';
export class Medico implements ProficionaisMedicina {
  constructor(
    private _nome: string, 
    private _CRM : string,
  ){}
  emitirPedidoExame(paciente: Paciente, descricao : string,  tipoExame : tipo, dataExame : Date, recomendacoes :string): Exame {
    return new Exame(tipoExame,descricao,paciente,this,recomendacoes,dataExame); 
}
  consultarLaudosDefinitivos(paciente: Paciente): Laudo[] {
    return [];
  }

  public get nome(): string{
    return this._nome;
  } 
  public get CRM(): string{
    return this._CRM;
  }
}

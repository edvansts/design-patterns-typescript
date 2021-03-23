import Laudo from '../../prototype/laudo/Laudo';
import ProficionaisMedicina from './ProficionaisMedicina';
export class Medico implements ProficionaisMedicina {
  constructor(
    private _nome: string, 
    private _CRM : string,
  ){}
  emitirPedidoExame(resistroPaciente: String): void {}
  consultarLaudosDefinitivos(resistroPaciente: String): Laudo[] {
    return [];
  }

  public get nome(): string{
    return this._nome;
  } 
  public get CRM(): string{
    return this._CRM;
  }
}
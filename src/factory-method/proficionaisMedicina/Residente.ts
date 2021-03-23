import ProficionaisMedicina from './ProficionaisMedicina';
import Laudo from '../../prototype/laudo/Laudo';
import { Medico } from './Medico';
import Exame from '../../prototype/exame/Exame';
import Paciente from '../../prototype/paciente/Paciente';
export class Residente implements ProficionaisMedicina {
  constructor(
    private _nome: string, 
    private _CRM : string,
    private _anoResidencia : number
  ){}
  emitirPedidoExame(paciente: Paciente): void {}
  consultarLaudosDefinitivos(paciente: Paciente): Laudo[] {
    return[]
  }
  emitirLaudo(exame : Exame, medico : Medico , descricao: string):Laudo{
    var laudo = new Laudo('PENDENTE',descricao,this,medico);
    return laudo;
  }

  public get nome(): string{
    return this._nome;
  } 
  public get CRM(): string{
    return this._CRM;
  }

  public get anoResidencia(): number{
    return this._anoResidencia;
  }

  public set anoResidencia(ano : number){
    this._anoResidencia = ano;
  }

}

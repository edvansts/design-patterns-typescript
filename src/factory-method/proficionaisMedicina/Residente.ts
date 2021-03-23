import ProficionaisMedicina from './ProficionaisMedicina';
import Laudo from '../../prototype/laudo/Laudo';
import Exame , {tipo} from '../../prototype/exame/Exame';
import Paciente from '../../prototype/paciente/Paciente';
export class Residente implements ProficionaisMedicina {
  constructor(
    private _nome: string, 
    private _CRM : string,
    private _anoResidencia : number
  ){}
  
  emitirPedidoExame(paciente: Paciente, descricao : string,  tipoExame : tipo, dataExame : Date, recomendacoes :string): Exame {
       return new Exame(tipoExame,descricao,paciente,this,recomendacoes,dataExame); 
  }
  emitirLaudo( descricao: string,conclusao:string):Laudo{
    var laudo = new Laudo('PENDENTE',descricao,conclusao,this);
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

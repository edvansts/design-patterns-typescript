import Laudo from '../../prototype/laudo/Laudo';
import ProficionaisMedicina from './ProficionaisMedicina';
export class Docente implements ProficionaisMedicina {
  constructor(
    private _nome: string, 
    private _CRM : string,
    private _titulacao : string
  ){}
  emitirPedidoExame(resistroPaciente: string): void {}

  consultarLaudosDefinitivos(resistroPaciente: string): Laudo[] {
    return [];
  }

  revisarLaudo(LaudoNaoRevidado: Laudo):Laudo{
    var LaudoRevidado = LaudoNaoRevidado;
    return LaudoRevidado;
  }

  public get nome(): string{
    return this._nome;
  } 
  public get CRM(): string{
    return this._CRM;
  }
  public get titulacao(): string{
    return this._titulacao;
  }
  public set titulacao(titulacao : string){
    this._titulacao = titulacao;
  }
}

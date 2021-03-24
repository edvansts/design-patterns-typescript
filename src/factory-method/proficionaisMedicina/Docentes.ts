import Exame, { tipo } from '../../prototype/exame/Exame';
import Laudo from '../../prototype/laudo/Laudo';
import Paciente from '../../prototype/paciente/Paciente';
import ProficionaisMedicina from './ProficionaisMedicina';
export class Docente implements ProficionaisMedicina {
  constructor(
    private _nome: string,
    private _CRM: string,
    private _titulacao: string,
  ) {}
  emitirPedidoExame(
    paciente: Paciente,
    descricao: string,
    tipoExame: tipo,
    dataExame: Date,
    recomendacoes: string,
  ): Exame {
    return new Exame(
      tipoExame,
      descricao,
      paciente,
      this,
      recomendacoes,
      dataExame,
    );
  }
  emitirLaudo(descricao: string, conclusao: string): Laudo {
    const laudo = new Laudo('DEFINITIVO', descricao, conclusao, this);
    return laudo;
  }
  public get nome(): string {
    return this._nome;
  }
  public get CRM(): string {
    return this._CRM;
  }
  public get titulacao(): string {
    return this._titulacao;
  }
  public set titulacao(titulacao: string) {
    this._titulacao = titulacao;
  }
}

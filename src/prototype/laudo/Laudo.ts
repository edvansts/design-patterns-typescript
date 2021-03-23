import Prototype from '../Prototype';

type status = 'PENDENTE' | 'DEFINITIVO';

export default class Laudo implements Prototype {
  constructor(
    private _status: status,
    private _descricao: string,
    private _hipoteseDiagnostica: string,
    private _medicoEmicao: any,
    private _medicoRevisao: any,
  ) {}

  clone(): Laudo {
    const newObj = new Laudo(
      this.status,
      this.descricao,
      this.hipoteseDiagnostica,
      this.medicoEmicao,
      this.medicoRevisao,
    );
    return newObj;
  }

  protected get status(): status {
    return this._status;
  }
  protected set status(value: status) {
    this._status = value;
  }

  protected get descricao(): string {
    return this._descricao;
  }
  protected set descricao(value: string) {
    this._descricao = value;
  }

  protected get hipoteseDiagnostica(): string {
    return this._hipoteseDiagnostica;
  }
  protected set hipoteseDiagnostica(value: string) {
    this._hipoteseDiagnostica = value;
  }

  protected get medicoEmicao(): any {
    return this._medicoEmicao;
  }
  protected set medicoEmicao(value: any) {
    this._medicoEmicao = value;
  }

  protected get medicoRevisao(): any {
    return this._medicoRevisao;
  }
  protected set medicoRevisao(value: any) {
    this._medicoRevisao = value;
  }
}

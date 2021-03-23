import { Docente } from '../../factory-method/proficionaisMedicina/Docentes';
import ProficionaisMedicina from '../../factory-method/proficionaisMedicina/ProficionaisMedicina';
import Prototype from '../Prototype';

export type status = 'PENDENTE' | 'DEFINITIVO';

export default class Laudo implements Prototype {
  private _medicoRevisao: Docente | null = null;

  constructor(
    private _status: status,
    private _descricao: string,
    private _conclusao: string,
    private _medicoEmicao: ProficionaisMedicina,
  ) {}

  clone(): Laudo {
    const newObj = new Laudo(
      this.status,
      this.descricao,
      this.medicoEmicao,
      this.medicoRevisao,
    );
    return newObj;
  }

  public get status(): status {
    return this._status;
  }
  public set status(value: status) {
    this._status = value;
  }

  public get descricao(): string {
    return this._descricao;
  }
  public set descricao(value: string) {
    this._descricao = value;
  }

  public get medicoEmicao(): any {
    return this._medicoEmicao;
  }
  public set medicoEmicao(value: any) {
    this._medicoEmicao = value;
  }

  public get medicoRevisao(): any {
    return this._medicoRevisao;
  }
  public set medicoRevisao(value: any) {
    this._medicoRevisao = value;
  }

  public get conclusao(): string {
    return this._conclusao;
  }
  public set conclusao(value: string) {
    this._conclusao = value;
  }
}

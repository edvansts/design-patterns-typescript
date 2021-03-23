import { Medico } from '../../factory-method/proficionaisMedicina/Medico';
import { Residente } from '../../factory-method/proficionaisMedicina/Residente';
import Prototype from '../Prototype';

type status = 'PENDENTE' | 'DEFINITIVO';

export default class Laudo implements Prototype {
  constructor(
    private _status: status,
    private _descricao: string,
    private _medicoEmicao: Residente,
    private _medicoRevisao: Medico,
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

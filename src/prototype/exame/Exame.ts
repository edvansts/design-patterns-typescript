import Paciente from '../paciente/Paciente';
import Laudo from '../laudo/Laudo';
import Prototype from '../Prototype';
import { Medico } from '../../factory-method/proficionaisMedicina/Medico';

export type tipo = 'ECO_CARDIOGRAMA' | 'ELETROCARDIOGRAMA' | 'MAPA' | 'HOLTER';

export default class Exame implements Prototype {
  private _laudos: Laudo[] = [];

  constructor(
    private _tipo: tipo,
    private _descricao: string,
    private _paciente: Paciente,
    private _medico: Medico,
    private _recomendacao: string,
    private _dataExame: Date,
  ) {}

  clone(): Exame {
    const newObj = new Exame(
      this.tipo,
      this.descricao,
      this.paciente,
      this.medico,
      this.recomendacao,
      this.dataExame
    );
    newObj.laudos = this.laudos.map((laudo) => laudo.clone());

    return newObj;
  }

  public adicionarLaudo(laudo: Laudo): boolean {
    if (laudo === null) return false;

    this.laudos.push(laudo);
    return true;
  }

  public get tipo(): tipo {
    return this._tipo;
  }
  public set tipo(value: tipo) {
    this._tipo = value;
  }

  public get laudos(): Laudo[] {
    return this._laudos;
  }

  public set laudos(value: Laudo[]) {
    this._laudos = value;
  }

  public get descricao(): string {
    return this._descricao;
  }
  public set descricao(value: string) {
    this._descricao = value;
  }

  public get paciente(): Paciente {
    return this._paciente;
  }
  public set paciente(value: Paciente) {
    this._paciente = value;
  }

  public get medico(): any {
    return this._medico;
  }
  public set medico(value: any) {
    this._medico = value;
  }

  public get recomendacao(): string {
    return this._recomendacao;
  }
  public set recomendacao(value: string) {
    this._recomendacao = value;
  }

  public get dataExame(): Date {
    return this._dataExame;
  }
  public set dataExame(value: Date) {
    this._dataExame = value;
  }
}

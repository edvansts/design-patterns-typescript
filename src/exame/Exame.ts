import Paciente from '../paciente/Paciente';
import Laudo from '../laudo/Laudo';

type tipo = 'ECO_CARDIOGRAMA' | 'ELETROCARDIOGRAMA' | 'MAPA' | 'HOLTER';

interface Prototype {
  clone(): Prototype;
}

export default class Exame implements Prototype {
  private _laudos: Laudo[] = [];

  constructor(
    private _tipo: tipo,
    private _descricao: string,
    private _paciente: Paciente,
    private _medico: any,
  ) {}

  clone(): Exame {
    const newObj = new Exame(
      this.tipo,
      this.descricao,
      this.paciente,
      this.medico,
    );
    newObj.laudos = this.laudos.map((laudo) => laudo.clone());

    return newObj;
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
}

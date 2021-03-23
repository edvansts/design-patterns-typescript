import Paciente from '../paciente/Paciente';
import Laudo from '../laudo/Laudo';

interface Prototype {
  clone(): Prototype;
}

export default class Exame implements Prototype {
  private laudos: Laudo[] = [];

  constructor(
    private nome: string,
    private descricao: string,
    private paciente: Paciente,
    private medico: any,
  ) {}

  clone(): Exame {
    const newObj = new Exame(
      this.nome,
      this.descricao,
      this.paciente,
      this.medico,
    );
    newObj.laudos = this.laudos.map((laudo) => laudo.clone());

    return newObj;
  }

  public get $nome(): string {
    return this.nome;
  }
  public set $nome(value: string) {
    this.nome = value;
  }

  public get $laudos(): Laudo[] {
    return this.laudos;
  }

  public set $laudos(value: Laudo[]) {
    this.laudos = value;
  }

  public get $descricao(): string {
    return this.descricao;
  }
  public set $descricao(value: string) {
    this.descricao = value;
  }

  public get $paciente(): Paciente {
    return this.paciente;
  }
  public set $paciente(value: Paciente) {
    this.paciente = value;
  }

  public get $medico(): any {
    return this.medico;
  }
  public set $medico(value: any) {
    this.medico = value;
  }
}

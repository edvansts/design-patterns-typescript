import { Medico } from '../factory-method/proficionaisMedicina/Medico';
import Exame from '../prototype/exame/Exame';
import Paciente from '../prototype/paciente/Paciente';

export default class Singleton {
  private static _instance: Singleton | null = null;

  private _medicos: Medico[] = [];
  private _exames: Exame[] = [];
  private _pacientes: Paciente[] = [];

  constructor() {}

  public static get instance(): Singleton {
    if (Singleton._instance === null) {
      Singleton._instance = new Singleton();
    }

    return Singleton._instance;
  }

  public get medicos(): Medico[] {
    return this._medicos;
  }

  public get exames(): Exame[] {
    return this._exames;
  }

  public get pacientes(): Paciente[] {
    return this._pacientes;
  }

  public addMedico(medico: Medico): boolean {
    if (medico === null) return false;
    this.medicos.push(medico);
    return true;
  }

  public addExame(exame: Exame): boolean {
    if (exame === null) return false;

    this.exames.push(exame);
    return true;
  }

  public addPaciente(paciente: Paciente): boolean {
    if (paciente === null) return false;

    this.pacientes.push(paciente);
    return true;
  }

  public removeMedico(index: number): boolean {
    if (index < 0) return false;

    this.medicos.splice(index, 1);
    return true;
  }

  public removeExame(index: number): boolean {
    if (index < 0) return false;

    this.exames.splice(index, 1);
    return true;
  }

  public removePaciente(index: number): boolean {
    if (index < 0) return false;

    this.pacientes.splice(index, 1);
    return true;
  }

  public buscarMedico(medico: Medico): Medico | null {
    if (medico === null) return null;

    const medicoBuscado = this.medicos.find((medic) => medic === medico);

    if (medicoBuscado) return medicoBuscado;
    else return null;
  }

  public buscarExame(exame: Exame): Exame | null {
    if (exame === null) return null;

    const exameBuscado = this.exames.find((exam) => exam === exame);

    if (exameBuscado) return exameBuscado;
    else return null;
  }

  public buscarPaciente(paciente: Paciente): Paciente | null {
    if (paciente === null) return null;

    const pacienteBuscado = this.pacientes.find(
      (pacient) => pacient === paciente,
    );

    if (pacienteBuscado) return pacienteBuscado;
    else return null;
  }
}

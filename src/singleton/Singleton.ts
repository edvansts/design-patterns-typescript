import { Docente } from '../factory-method/proficionaisMedicina/Docentes';
import ProficionaisMedicina from '../factory-method/proficionaisMedicina/ProficionaisMedicina';
import Exame from '../prototype/exame/Exame';
import Laudo from '../prototype/laudo/Laudo';
import Paciente from '../prototype/paciente/Paciente';

export default class Singleton {
  private static _instance: Singleton | null = null;

  private _medicos: ProficionaisMedicina[] = [];
  private _exames: Exame[] = [];
  private _pacientes: Paciente[] = [];

  constructor() {}

  public static get instance(): Singleton {
    if (Singleton._instance === null) {
      Singleton._instance = new Singleton();
    }

    return Singleton._instance;
  }

  public get medicos(): ProficionaisMedicina[] {
    return this._medicos;
  }

  public get exames(): Exame[] {
    return this._exames;
  }

  public get pacientes(): Paciente[] {
    return this._pacientes;
  }

  public addMedico(medico: ProficionaisMedicina): boolean {
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

  public buscarMedico(medico: ProficionaisMedicina): ProficionaisMedicina | null {
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

  public buscarLaudosDefinitivosPorPaciente(
    paciente: Paciente,
  ): Laudo[] | null {
    if (paciente === null) return null;

    let laudosDefinitivosPaciente: Laudo[] = [];

    this._exames.map((exame) => {
      if (exame.paciente === paciente) {
        const laudosDefinitivosExame = exame.laudos.filter(
          (laudo) => laudo.status == 'DEFINITIVO',
        );
        laudosDefinitivosPaciente = [
          ...laudosDefinitivosPaciente,
          ...laudosDefinitivosExame,
        ];
      }
    });
    return laudosDefinitivosPaciente;
  }

  public revisarLaudo(medico: Docente, laudo: Laudo): boolean {
    if (medico === null || laudo === null) return false;

    if (laudo.status === 'DEFINITIVO') return false;

    laudo.status = 'DEFINITIVO';
    laudo.medicoRevisao = medico;
    return true;
  }
}

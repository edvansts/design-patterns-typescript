import { Docente } from './factory-method/proficionaisMedicina/Docentes';
import { Medico } from './factory-method/proficionaisMedicina/Medico';
import { Residente } from './factory-method/proficionaisMedicina/Residente';
import Exame from './prototype/exame/Exame';
import Paciente from './prototype/paciente/Paciente';
import Singleton from './singleton/Singleton';

const db1 = Singleton.instance;

const medico = new Medico();
const docente = new Docente();
const residente = new Residente();
const paciente = new Paciente('Reginaldo', 'M', 'VERDE', new Date());
const exame = new Exame('ECO_CARDIOGRAMA', 'nada', paciente, medico);

console.log(db1.addMedico(medico));
console.log(db1.addMedico(docente));
console.log(db1.addMedico(residente));
console.log(db1.addExame(exame));
console.log(db1.addPaciente(paciente));

console.log(db1);

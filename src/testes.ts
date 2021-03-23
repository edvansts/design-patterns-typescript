import {CriadorDocente} from './factory-method/factorys/CriadorDocente';
import { CriadorMedico } from './factory-method/factorys/CriadorMedicos';
import { CriadorResidente } from './factory-method/factorys/CriadorResidente';
import Exame from './prototype/exame/Exame';
import Paciente from './prototype/paciente/Paciente';
import Singleton from './singleton/Singleton';

const db1 = Singleton.instance;
const criadorDocente = new CriadorDocente();
const criadorResiidentes = new CriadorResidente();
const criadorMedicos = new CriadorMedico;

const medico = criadorMedicos.criarProficional("Jorge","0254678");
const docente = criadorDocente.criarProficional("João","0256846",0,"Doutor");
const residente = criadorResiidentes.criarProficional("Maria","0786846",2017);
const paciente = new Paciente('Reginaldo', 'M', 'VERDE', new Date());
const exame = new Exame('ECO_CARDIOGRAMA', 'nada', paciente, medico,"não fumar antes do exame",new Date);

console.log(db1.addMedico(medico));
console.log(db1.addMedico(docente));
console.log(db1.addMedico(residente));
console.log(db1.addExame(exame));
console.log(db1.addPaciente(paciente));

console.log(db1);

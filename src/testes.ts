import { CriadorDocente } from './factory-method/factorys/CriadorDocente';
import { CriadorMedico } from './factory-method/factorys/CriadorMedicos';
import { CriadorResidente } from './factory-method/factorys/CriadorResidente';
import Exame from './prototype/exame/Exame';
import Paciente from './prototype/paciente/Paciente';
import Singleton from './singleton/Singleton';

const databaseSingleton = Singleton.instance;
const criadorDocente = new CriadorDocente();
const criadorResiidentes = new CriadorResidente();
const criadorMedicos = new CriadorMedico();

const medico = criadorMedicos.criarProficional('Jorge', '0254678');
const docente = criadorDocente.criarProficional('João', '0256846', 0, 'Doutor');
const residente = criadorResiidentes.criarProficional('Maria', '0786846', 2017);
const paciente = new Paciente('Reginaldo', 'M', 'VERDE', new Date());
const exame = new Exame(
  'ECO_CARDIOGRAMA',
  'nada',
  paciente,
  medico,
  'não fumar antes do exame',
  new Date(),
);

databaseSingleton.addMedico(medico);
databaseSingleton.addMedico(docente);
databaseSingleton.addMedico(residente);
databaseSingleton.addExame(exame);
databaseSingleton.addPaciente(paciente);

console.log(databaseSingleton);

databaseSingleton.emitirLaudo(
  'ele está morrendo',
  'morrendo de hiperhimólise',
  docente,
  exame,
);

databaseSingleton.emitirLaudo(
  'ele está morrendo',
  'morrendo de hiperhimólise',
  residente,
  exame,
);
console.log('==============================================');
console.log(databaseSingleton.buscarLaudosDefinitivosPorPaciente(paciente));
console.log('==============================================');
console.log(databaseSingleton.exames.map((exame) => exame.laudos));

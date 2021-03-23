import Laudo from '../../prototype/laudo/Laudo';
import Paciente from '../../prototype/paciente/Paciente';
export default interface ProficionaisMedicina {
  emitirPedidoExame(passiente: Paciente): void;
  consultarLaudosDefinitivos(passiente: Paciente): Laudo[];
}

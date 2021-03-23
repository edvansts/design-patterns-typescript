import Laudo from '../../prototype/laudo/Laudo';
import ProficionaisMedicina from './ProficionaisMedicina';

export class Docente implements ProficionaisMedicina {
  emitirPedidoExame(resistroPaciente: string): void {}

  consultarLaudosDefinitivos(resistroPaciente: string): Laudo[] {
    return [];
  }
}

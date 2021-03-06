import Exame, { tipo } from '../../prototype/exame/Exame';
import Laudo from '../../prototype/laudo/Laudo';
import Paciente from '../../prototype/paciente/Paciente';
export default interface  ProficionaisMedicina {
  emitirPedidoExame(paciente: Paciente, descricao : string,  tipoExame : tipo, dataExame : Date, recomendacoes :string): Exame ;
  emitirLaudo( descricao: string,conclusao:string):Laudo;
}

import Laudo from '../../laudo/Laudo';
import ProficionaisMedicina from './ProficionaisMedicina' ;
export class Medico implements ProficionaisMedicina{
    emitirPedidoExame(resistroPaciente : String): void{
        
    }
    consultarLaudosDefinitivos(resistroPaciente : String) : Laudo[] {
      
        return [];
    };
}
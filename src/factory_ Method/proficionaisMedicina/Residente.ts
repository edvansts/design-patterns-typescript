import ProficionaisMedicina from "./ProficionaisMedicina";
import Laudo from '../../laudo/Laudo'
export class Residente implements ProficionaisMedicina{
    emitirPedidoExame(resistroPaciente : String): void{
        
    }
    consultarLaudosDefinitivos(resistroPaciente : String) : Laudo[] {
      
        return [];
    }
}
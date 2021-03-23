import Laudo from '../../laudo/Laudo';
export default interface ProficionaisMedicina{
    emitirPedidoExame(resistroPaciente : String) : void;
    consultarLaudosDefinitivos(resistroPaciente : String) : Laudo[] ;
}
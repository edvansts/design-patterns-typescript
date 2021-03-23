import ProficionaisMedicina from '../proficionaisMedicina/ProficionaisMedicina';
export default abstract class CriadorProficionaisMedicina {
  abstract criarProficional(): ProficionaisMedicina;
}

import ProficionaisMedicina from '../proficionaisMedicina/ProficionaisMedicina';
export default abstract class CriadorProficionaisMedicina {
  
  abstract criarProficional(nome : string, CRM : string, ano?: number, Titulacao? : string): ProficionaisMedicina;
  

  //abstract criarProficional(nome : string, CRM : string): ProficionaisMedicina;

  
}

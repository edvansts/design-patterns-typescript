type sexo = 'M' | 'F' | 'NB'; //Masculino, Feminino e Não binário
type cor = 'VERMELHO' | 'LARANJA' | 'AMARELO' | 'VERDE';

export default class Paciente {
  constructor(
    private nome: string,
    private sexo: sexo,
    private cor: cor,
    private dataNascimento: Date,
  ) {}
  
  protected get $nome(): string {
    return this.nome;
  }
  protected set $nome(value: string) {
    this.nome = value;
  }
  
  protected get $sexo(): sexo {
    return this.sexo;
  }
  protected set $sexo(value: sexo) {
    this.sexo = value;
  }
  
  protected get $cor(): cor {
    return this.cor;
  }
  protected set $cor(value: cor) {
    this.cor = value;
  }

  protected get $dataNascimento(): Date {
    return this.dataNascimento;
  }
  protected set $dataNascimento(value: Date) {
    this.dataNascimento = value;
  }

}



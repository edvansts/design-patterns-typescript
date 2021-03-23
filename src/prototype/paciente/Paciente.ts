import Prototype from '../Prototype';

export type sexo = 'M' | 'F' | 'NB'; //Masculino, Feminino e Não binário
export type cor = 'VERMELHO' | 'LARANJA' | 'AMARELO' | 'VERDE';

export default class Paciente implements Prototype {
  constructor(
    private _nome: string,
    private _sexo: sexo,
    private _cor: cor,
    private _dataNascimento: Date,
  ) {}

  clone(): Prototype {
    const newObj = new Paciente(
      this.nome,
      this.sexo,
      this.cor,
      this.dataNascimento,
    );
    return newObj;
  }

  protected get nome(): string {
    return this._nome;
  }
  protected set nome(value: string) {
    this._nome = value;
  }

  protected get sexo(): sexo {
    return this._sexo;
  }
  protected set sexo(value: sexo) {
    this._sexo = value;
  }

  protected get cor(): cor {
    return this._cor;
  }
  protected set cor(value: cor) {
    this._cor = value;
  }

  protected get dataNascimento(): Date {
    return this._dataNascimento;
  }
  protected set dataNascimento(value: Date) {
    this._dataNascimento = value;
  }
}

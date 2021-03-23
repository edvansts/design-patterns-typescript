type status = 'PENDENTE' | 'DEFINITIVO';

interface Prototype {
  clone(): Prototype;
}

export default class Laudo implements Prototype {
  constructor(
    private status: status,
    protected descricao: string,
    protected hipoteseDiagnostica: string,
    protected medicoEmicao: any,
    protected medicoRevisao: any,
  ) {}

  clone(): Laudo {
    const newObj = new Laudo(
      this.status,
      this.descricao,
      this.hipoteseDiagnostica,
      this.medicoEmicao,
      this.medicoRevisao,
    );
    return newObj;
  }

  protected get $status(): status {
    return this.$status;
  }
  protected set $status(value: status) {
    this.$status = value;
  }

  protected get $descricao(): string {
    return this.$descricao;
  }
  protected set $descricao(value: string) {
    this.$descricao = value;
  }

  protected get $hipoteseDiagnostica(): string {
    return this.$hipoteseDiagnostica;
  }
  protected set $hipoteseDiagnostica(value: string) {
    this.$hipoteseDiagnostica = value;
  }

  protected get $medicoEmicao(): any {
    return this.$medicoEmicao;
  }
  protected set $medicoEmicao(value: any) {
    this.$medicoEmicao = value;
  }

  protected get $medicoRevisao(): any {
    return this.$medicoRevisao;
  }
  protected set $medicoRevisao(value: any) {
    this.$medicoRevisao = value;
  }
}

export class UmaClasse {
    constructor(
        private name: string,
        public lastName: string,
        protected age: number
    ){}

    public getName(): string {
        return this.name;
    }
    public setName(name: string): void{
        this.name = name;
    }

    public getLastName(): string {
        return this.lastName;
    }
    public setLastName(lastName: string): void{
        this.lastName = lastName;
    }

    public getAge(): number {
        return this.age;
    }
    public setAge(age: number): void{
        this.age = age;
    }
}
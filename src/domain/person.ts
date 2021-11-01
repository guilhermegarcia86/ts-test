export class Person {

    readonly id: string
    readonly name: string
    readonly document: string

    constructor(id: string, name: string, document: string){
        this.id = id
        this.name = name
        this.document = document
    }

    sayHi(): string {
        return `Hi my name is ${this.name}`
    }
    
}
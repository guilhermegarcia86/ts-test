import { Person } from "src/domain/person";
import { PersonRepository } from "src/ports/repository/person.repository";

export default class PersonRepositoryInMemory implements PersonRepository {

    private inMemoryDB: Map<string, Person> = new Map()

    async save(person: Person): Promise<Person> {
        this.inMemoryDB.set("uuid", person)
        return Promise.resolve(person)
    }

    async findById(id: string): Promise<Person> {
        return Promise.resolve(this.inMemoryDB.get(id))
    }

    async findAll(): Promise<Person[]> {
        return Promise.resolve([...this.inMemoryDB.values()])
    }

    
}
import { Person } from "src/domain/person";

export interface PersonRepository{
    save(person: Person): Promise<Person>

    findById(id: string): Promise<Person>

    findAll(): Promise<Person[]>
}
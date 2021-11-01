import PersonRepositoryInMemory from "src/adapter/repository/inMemory/person.repository.inMemory"
import { Person } from "src/domain/person"
import { PersonRepository } from "src/ports/repository/person.repository"
import { PersonService } from "./person.service"

describe('PersonService', () => {
    let inMemoryDB: PersonRepositoryInMemory
    let personService: PersonService

    beforeAll(() => {
        inMemoryDB = new PersonRepositoryInMemory()
        personService = new PersonService(inMemoryDB)
    })

    test('create person success', async () => {
        const person: Person = new Person("uuid", "Guilherme", "CPF")

        const result = await personService.create(person)

        expect(result.name).toBe("Guilherme")
    })
})
import { Person } from "./person"

describe('PersonDomain', () => {
    let person: Person

    describe('sayHi', () => {
        it('should return a right message', () => {
            person = new Person("uuid", "Guilherme", "CPF")

            let result = person.sayHi()

            expect(result).toBe('Hi my name is Guilherme')
        })
    })
})
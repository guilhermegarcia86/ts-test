import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Item } from "src/domain/item"
import { ItemRepository } from "src/ports/repository/item.repository"
import { Repository } from "typeorm";
import { ItemEntity } from "./entity/item.entity";

@Injectable()
export default class ItemRepositoryTypeORM implements ItemRepository{

    private readonly logger = new Logger(ItemRepositoryTypeORM.name)

    constructor(@InjectRepository(ItemEntity) private readonly personRepository: Repository<ItemEntity>){}

    async save(item: Item): Promise<Item> {

        // let personEntity = new PersonEntity()
        // personEntity.name = person.name
        // personEntity.document = person.document

        // const personSaved: PersonEntity = await this.personRepository.save(personEntity)

        // return new Person(personSaved.id, personSaved.name, personSaved.document)

        return null;
    }


    async delete(id: string) {

    }


    async findAll(): Promise<Item[]> {

        // const personEntityArray: PersonEntity[] = await this.personRepository.find()

        // const personArray: Person[] = personEntityArray.map((personEntity) => {
        //     return new Person(personEntity.id, personEntity.name, personEntity.document)
        // })

        // return personArray

        return null;
    }
    
}
import { Item } from "src/domain/item"
import { ItemRepository } from "src/ports/repository/item.repository"

export class ItemService{
    constructor(private readonly repository: ItemRepository){}

    async create(item: Item): Promise<Item>{
        return this.repository.save(item)
    }

    async delete(id: string){
        return this.repository.delete(id)
    }

    async findAll(): Promise<Item[]>{
        return this.repository.findAll()
    }
}
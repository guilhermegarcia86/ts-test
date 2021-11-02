import { Item } from "src/domain/item";
import { ItemRepository } from "src/ports/repository/item.repository";


export default class ItemRepositoryInMemory implements ItemRepository{

    private inMemoryDB: Map<string, Item> = new Map()

    async save(item: Item): Promise<Item> {
        this.inMemoryDB.set("uuid", item)
        return await Promise.resolve(item)
    }

    async delete(id: string) {
        await Promise.resolve(this.inMemoryDB.delete(id))
    }

    async findAll(): Promise<Item[]> {
        return await Promise.resolve([...this.inMemoryDB.values()])
    }
    
}
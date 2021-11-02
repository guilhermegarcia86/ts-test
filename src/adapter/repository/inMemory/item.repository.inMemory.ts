import { Item } from "src/domain/item";
import { ItemRepository } from "src/ports/repository/item.repository";


export default class ItemRepositoryInMemory implements ItemRepository{

    private inMemoryDB: Map<number, Item> = new Map()

    async save(item: Item): Promise<Item> {
        this.inMemoryDB.set(1, item)
        return await Promise.resolve(item)
    }

    async delete(id: number) {
        await Promise.resolve(this.inMemoryDB.delete(id))
    }

    async findAll(): Promise<Item[]> {
        return await Promise.resolve([...this.inMemoryDB.values()])
    }

    async findById(id: number): Promise<Item> {
        return await Promise.resolve(this.inMemoryDB.get(id))
    }
    
}
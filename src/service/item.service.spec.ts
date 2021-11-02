import ItemRepositoryInMemory from "src/adapter/repository/inMemory/item.repository.inMemory"
import { Item } from "src/domain/item"
import { ItemRepository } from "src/ports/repository/item.repository"
import { ItemService } from "./item.service"


describe('ItemService', () => {

    let inMemoryDB: ItemRepository
    let itemService: ItemService

    beforeAll(() => {
        inMemoryDB = new ItemRepositoryInMemory()
        itemService = new ItemService(inMemoryDB)
    })

    it('should create a item success', async () => {
        const item = new Item()
        item.id = 1
        item.name = "Informática"

        const result = await itemService.create(item)

        expect(result.name).toBe(item.name)
    })
})
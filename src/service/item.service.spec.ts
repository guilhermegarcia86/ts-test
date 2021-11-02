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

    it('should find all items', async () => {
        const itemInformatica = new Item()
        itemInformatica.id = 1
        itemInformatica.name = "Informática"

        const itemInformaticaCreated = await itemService.create(itemInformatica)

        const itemLaptop = new Item()
        itemLaptop.id = 2
        itemLaptop.name = "Laptop"
        itemLaptop.parentMenu = itemInformaticaCreated

        const itemLaptopCreated = await itemService.create(itemLaptop)

        const itemDell = new Item()
        itemDell.id = 3
        itemDell.name = "Dell"
        itemDell.parentMenu = itemLaptopCreated

        await itemService.create(itemDell)

        const items = await itemService.findAll()

        expect(items).toEqual(expect.arrayContaining([
            expect.objectContaining({name: "Dell"})
        ]))

    })

    it('should delete a item', async () => {
        const item = new Item()
        item.id = 1
        item.name = "Informática"

        const itemCreated = await itemService.create(item)

        await itemService.delete(itemCreated.id)

        const items = await itemService.findAll()

        expect(items).toEqual(expect.not.arrayContaining([itemCreated]))

    })
})
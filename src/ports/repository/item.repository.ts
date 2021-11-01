import { Item } from "src/domain/item";

export interface ItemRepository{
    save(person: Item): Promise<Item>

    delete(id: string)

    findAll(): Promise<Item[]>
}
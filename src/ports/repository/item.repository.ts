import { Item } from "src/domain/item";

export interface ItemRepository{
    save(item: Item): Promise<Item>

    delete(id: number)

    findAll(): Promise<Item[]>

    findById(id: number): Promise<Item>
}
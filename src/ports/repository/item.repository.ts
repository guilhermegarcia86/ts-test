import { Item } from "src/domain/item";

export interface ItemRepository{
    save(item: Item): Promise<Item>

    delete(id: string)

    findAll(): Promise<Item[]>
}
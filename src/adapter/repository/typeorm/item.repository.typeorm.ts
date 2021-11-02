import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Item } from "src/domain/item";
import { ItemRepository } from "src/ports/repository/item.repository"
import { getManager, Repository } from "typeorm";

@Injectable()
export default class ItemRepositoryTypeORM implements ItemRepository{

    private readonly logger = new Logger(ItemRepositoryTypeORM.name)

    constructor(@InjectRepository(Item) private readonly itemRepository: Repository<Item>){}

    async save(item: Item): Promise<Item> {

        let itemEntity = new Item()

        if(item.relatedId){
            let parentItem = await this.itemRepository.findOne(item.relatedId)
            itemEntity.parentMenu = parentItem
        }

        itemEntity.name = item.name

        return await this.itemRepository.save(itemEntity)
    }


    delete(id: number) {
        this.itemRepository.delete(id)
    }


    async findAll(): Promise<Item[]> {

        return await this.itemRepository.manager.getTreeRepository(Item).findTrees()
    }

    async findById(id: number): Promise<Item>{
        return await this.itemRepository.findOne(id)
    }
    
}
import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Item } from "src/domain/item";
import { ItemRepository } from "src/ports/repository/item.repository"
import { Repository } from "typeorm";

@Injectable()
export default class ItemRepositoryTypeORM implements ItemRepository{

    private readonly logger = new Logger(ItemRepositoryTypeORM.name)

    constructor(@InjectRepository(Item) private readonly itemRepository: Repository<Item>){}

    async save(item: Item): Promise<Item> {

        this.logger.log("PREPARING TO SAVE ITEM")

        let itemEntity = new Item()

        if(item.relatedId){
            let parentItem = await this.itemRepository.findOne(item.relatedId)
            itemEntity.parentMenu = parentItem
        }

        itemEntity.name = item.name

        this.logger.log("SAVE ITEM")

        return await this.itemRepository.save(itemEntity)
    }


    delete(id: number) {
        this.logger.log("PREPARING TO DELETE ITEM")
        this.itemRepository.delete(id)
    }


    async findAll(): Promise<Item[]> {
        this.logger.log("TRYING TO FIND ALL ITEMS")
        return await this.itemRepository.manager.getTreeRepository(Item).findTrees()
    }

    async findById(id: number): Promise<Item>{
        this.logger.log("FIND A ITEM")
        return await this.itemRepository.findOne(id)
    }
    
}
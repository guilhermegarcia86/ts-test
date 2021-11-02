import { Body, Controller, Delete, Get, Inject, Param, Post } from "@nestjs/common"
import { Item } from "src/domain/item"
import { ItemService } from "src/service/item.service"
import { ConfigServiceModule } from "./config/config-service.module"

@Controller('item')
export class ItemController{

    constructor(@Inject(ConfigServiceModule.ITEM_SERVICE) private readonly itemService: ItemService){}

    @Delete(':id')
    public findById(@Param('id') id: number): Promise<Item>{
        return this.itemService.delete(id)
    }

    @Get()
    public findAll(): Promise<Item[]>{
        return this.itemService.findAll()
    }

    @Post()
    public createItem(@Body() item: Item): Promise<Item>{
        return this.itemService.create(item)
    }
}
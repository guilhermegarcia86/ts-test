import { DynamicModule, Module } from "@nestjs/common";
import { TypeOrmConfigModule } from "src/adapter/repository/typeorm/config/typeorm-config.module";
import ItemRepositoryTypeORM from "src/adapter/repository/typeorm/item.repository.typeorm";
import { ItemService } from "src/service/item.service";

@Module({
    imports: [TypeOrmConfigModule]
})
export class ConfigServiceModule{

    static ITEM_SERVICE: string = 'ItemService'

    static register(): DynamicModule{
        return{
            module: ConfigServiceModule,
            providers: [
                {
                    inject: [ItemRepositoryTypeORM],
                    provide: ConfigServiceModule.ITEM_SERVICE,
                    useFactory: (itemRepository: ItemRepositoryTypeORM) => new ItemService(itemRepository)
                }
            ],
            exports: [ConfigServiceModule.ITEM_SERVICE]
        }
    }
}
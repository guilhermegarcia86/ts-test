import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Item } from "src/domain/item";
import ItemRepositoryTypeORM from "../item.repository.typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            "type": "postgres",
            "host": "localhost",
            "port": 5432,
            "username": "myuser",
            "password": "myuser",
            "database": "menu",
            "entities": ["dist/**/*.entity{.ts,.js}"],
            "synchronize": true,
            "autoLoadEntities": true
        }),
        TypeOrmModule.forFeature([Item])
    ],
    providers: [ItemRepositoryTypeORM],
    exports: [ItemRepositoryTypeORM]

})
export class TypeOrmConfigModule {}
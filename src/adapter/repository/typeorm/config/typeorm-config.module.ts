import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonEntity } from "../entity/person.entity";
import PersonRepositoryTypeORM from "../person.repository.typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            "type": "mysql",
            "host": "localhost",
            "port": 3306,
            "username": "user",
            "password": "user",
            "database": "test",
            "entities": ["dist/**/*.entity{.ts,.js}"],
            "synchronize": true,
            "autoLoadEntities": true
        }),
        TypeOrmModule.forFeature([PersonEntity])
    ],
    providers: [PersonRepositoryTypeORM],
    exports: [PersonRepositoryTypeORM]

})
export class TypeOrmConfigModule {}
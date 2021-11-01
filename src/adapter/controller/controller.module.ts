import { Module } from "@nestjs/common";
import { ConfigServiceModule } from "./rest/config/config-service.module";
import { ItemController } from "./rest/item.controller";

@Module({
    imports: [ConfigServiceModule.register()],
    controllers: [ItemController]
})
export class ControllerModule{}
import { Module } from "@nestjs/common";
import { ControllerModule } from "src/adapter/controller/controller.module";

@Module({
    imports: [ControllerModule]
})
export class AppModule{}
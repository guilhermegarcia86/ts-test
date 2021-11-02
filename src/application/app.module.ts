import { ClassSerializerInterceptor, Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { ControllerModule } from "src/adapter/controller/controller.module";
import { ExceptionHandleFilter } from "src/filter/exception.handle.filter";

@Module({
    imports: [ControllerModule],
    providers: [
        {
            provide: APP_FILTER,
            useClass: ExceptionHandleFilter
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: ClassSerializerInterceptor
        }
    ]
})
export class AppModule{}
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './application/app.module';

async function bootstrap() {

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {logger: ['log', 'error']}
  );
  app.useGlobalPipes(new ValidationPipe({transform: true}))
  await app.listen(3000);
}
bootstrap().then((r) => r);

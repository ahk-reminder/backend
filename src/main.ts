import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config({
    path: `.env.${process.env.NODE_ENV || 'development'}`,
  });

  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.useGlobalPipes(new ValidationPipe());

  const appPort = parseInt(process.env.APP_PORT || '3000')
  
  await app.listen(appPort);
}

bootstrap();

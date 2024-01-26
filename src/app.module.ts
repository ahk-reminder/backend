import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './http/controllers/app.controller';
import { AppService } from './services/app.service';
import { LoggerMiddleware } from './http/middleware/logger.middleware';
import { JwtAuth } from './http/middleware/jwt-auth.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, JwtAuth)
      .forRoutes(AppController);
  }
}

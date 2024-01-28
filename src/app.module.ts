import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './http/controllers/app.controller';
import { AppService } from './services/app.service';
import { LoggerMiddleware } from './http/middleware/logger.middleware';
import { JwtAuth } from './http/middleware/jwt.middleware';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, JwtAuth).forRoutes('*');
  }
}

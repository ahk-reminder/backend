import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './http/controllers/app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './http/middleware/logger.middleware';
import { JwtAuth } from './http/middleware/jwt.middleware';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationModule } from '../authentication/authentication.module';

@Module({
  imports: [
    AuthModule,
    AuthenticationModule,
    UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'ahk',
      password: 'Ahk0245*',
      database: 'ahk',
      entities: [],
      synchronize: true,
      migrationsRun: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer.apply(JwtAuth).exclude('(.*)/login').forRoutes('*');
  }
}

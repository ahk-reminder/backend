import { SequelizeModule } from '@nestjs/sequelize';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './http/controllers/app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './http/middleware/logger.middleware';
import { JwtAuth } from './http/middleware/jwt.middleware';
import { UsersModule } from '../users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthenticationModule } from '../authentication/authentication.module';

@Module({
  imports: [
    AuthenticationModule,
    UsersModule,
    ConfigModule.forRoot(),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        //models: [User],
        autoLoadModels: true,
        synchronize: false,
      }),
      inject: [ConfigService],
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

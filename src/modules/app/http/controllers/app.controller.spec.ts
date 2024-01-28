import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from '../../services/app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../../../auth/auth.module';
import { UsersModule } from '../../../users/users.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AuthModule, UsersModule, ConfigModule.forRoot()],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return app version', () => {
      const appVersion = appController.getAppVersion();
      expect(typeof appVersion).toBe('string');
    });
  });
});
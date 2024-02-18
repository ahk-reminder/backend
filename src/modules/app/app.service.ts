import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EMPTY_STRING } from './utils/constants';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
    private sequelize: Sequelize,
  ) { }

  getAppVersion(): string {
    return this.configService.get<string>('APP_VERSION', EMPTY_STRING);
  }
}

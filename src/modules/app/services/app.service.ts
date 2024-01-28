import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EMPTY_STRING } from '../../../common/utils/constants';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  
  getAppVersion(): string {
    return this.configService.get<string>('APP_VERSION') ?? EMPTY_STRING;
  }
}

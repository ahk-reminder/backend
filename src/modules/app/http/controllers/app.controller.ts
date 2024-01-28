import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from '../../services/app.service';

import { Reflector } from '@nestjs/core';
import { RolesGuard } from '../guards/authorization.guard';
export const Roles = Reflector.createDecorator<string[]>();

@Controller()
@UseGuards(RolesGuard)
@Roles(['admin'])
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

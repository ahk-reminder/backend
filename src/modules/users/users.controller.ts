import { Controller, HttpCode, HttpStatus, Get, Param, UseGuards } from '@nestjs/common';
import { FindOneDTO } from '../app/dtos/find-one.dto';

import { Reflector } from '@nestjs/core';
import { RolesGuard } from '../app/http/guards/authorization.guard';
export const Roles = Reflector.createDecorator<string[]>();

@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor() {}

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  @UseGuards(RolesGuard)
  @Roles(['admin'])
    findOne(@Param() params: FindOneDTO) {
    const { id } = params;
    return { id };
  }
}

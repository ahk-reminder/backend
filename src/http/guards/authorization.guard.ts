import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const handler = context.getHandler();
    const roles = this.reflector.get(Roles, handler);

    if (!roles) {
      return false;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // return matchRoles(roles, user.roles);
    return true;
  }
}

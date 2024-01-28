import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthenticationService {
  constructor(private usersService: UsersService) {}

  async login(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return user;
  }
}

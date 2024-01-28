import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './password.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private passwordService: PasswordService,
  ) {}

  async login(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = (await this.usersService.findOne(username)) ?? {};

    const isValidPassword = await this.validateUserPassword(
      password,
      user.password,
    );

    if (!isValidPassword) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.userId, username: user.username };
    const token = await this.jwtService.signAsync(payload);

    return { access_token: token };
  }

  async validateUserPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    if (!plainTextPassword || !hashedPassword) {
      return false;
    }

    return await this.passwordService.comparePasswords(
      plainTextPassword,
      hashedPassword,
    );
  }
}

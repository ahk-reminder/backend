import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './password.service';
import { EMPTY_STRING } from 'src/modules/app/utils/constants';

@Injectable()
export class AuthenticationService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private passwordService: PasswordService,
  ) { }

  async login(
    mobileNumber: number,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findByMobileNumber(mobileNumber);

    const isValidPassword = await this.validateUserPassword(password, user?.password ?? EMPTY_STRING);

    if (!isValidPassword) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user?.id, mobileNumber: user?.mobile_number };
    const token = await this.jwtService.signAsync(payload);

    return { access_token: token };
  }

  private async validateUserPassword(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    if (!plainTextPassword || !hashedPassword) {
      return false;
    }

    return await this.passwordService.comparePasswords(plainTextPassword, hashedPassword,);
  }
}

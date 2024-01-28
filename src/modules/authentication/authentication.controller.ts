import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LoginDto } from '../auth/dtos/login.dto';

@Controller('authentication')
export class AuthenticationController {
    constructor(private authService: AuthenticationService) {}
  
    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() loginDto: LoginDto) {
      const { email, password } = loginDto;
      return this.authService.login(email, password);
    }
  }
  
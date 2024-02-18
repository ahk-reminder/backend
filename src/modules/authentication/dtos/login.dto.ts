import { IsNumber, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNumber()
  mobileNumber: number;

  @IsNotEmpty()
  password: string;
}

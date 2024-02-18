import { IsNumberString } from 'class-validator';

export class FindOneDTO {
  @IsNumberString()
  id: number;
}

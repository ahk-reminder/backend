import { Injectable } from '@nestjs/common';
import { User } from 'src/data-access/entities/user.entity';
import { UserRepository } from 'src/data-access/repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UserRepository,
) { }

  async findByMobileNumber(mobileNumber: number): Promise<User | null> {
    return this.userRepository.findByMobileNumber(mobileNumber);
  }
}

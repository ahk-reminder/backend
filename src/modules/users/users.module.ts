import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/data-access/entities/user.entity';
import { UserRepository } from 'src/data-access/repositories/user.repository';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService, UserRepository],
  exports: [UsersService],
})
export class UsersModule { }

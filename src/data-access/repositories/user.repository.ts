import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/data-access/entities/user.entity';

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User)
        private entity: typeof User,
    ) { }

    async findAll(): Promise<User[]> {
        return this.entity.findAll();
    }

    async findOne(id: number): Promise<User | null> {
        return this.entity.findOne({
            where: {
                id,
            },
        });
    }

    async remove(id: number): Promise<void> {
        const user = await this.findOne(id);
        await user?.destroy();
    }

    
    async findByMobileNumber(mobileNumber: number): Promise<User | null> {
        return this.entity.findOne({
            where: {
                mobileNumber,
            },
        });
    }
}

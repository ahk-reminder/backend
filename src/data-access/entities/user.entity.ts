import { AllowNull, AutoIncrement, Column, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';

@Table({
    tableName: 'user'
})
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column
    id: number;

    @AllowNull(false)
    @Column
    firstName: string;

    @AllowNull(false)
    @Column
    lastName: string;

    @Unique
    @AllowNull(false)
    @Column
    mobileNumber: string;

    @Unique
    @AllowNull(false)
    @Column
    email: string;

    @AllowNull(false)
    @Column
    password: string;

    @AllowNull(false)
    @Column({ defaultValue: true })
    isActive: boolean;
}

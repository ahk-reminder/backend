import { AllowNull, AutoIncrement, Column, CreatedAt, Model, PrimaryKey, Table, Unique, UpdatedAt } from 'sequelize-typescript';

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
    first_name: string;

    @AllowNull(false)
    @Column
    last_name: string;

    @Unique
    @AllowNull(false)
    @Column
    mobile_number: string;

    @Unique
    @AllowNull(false)
    @Column
    email: string;

    @AllowNull(false)
    @Column
    password: string;

    @AllowNull(false)
    @Column({ defaultValue: true })
    is_active: boolean;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}

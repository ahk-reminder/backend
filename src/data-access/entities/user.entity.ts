import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column({ primaryKey: true })
    id: number;

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    mobileNumber: string;

    @Column
    email: string;

    @Column
    password: string;

    @Column({ defaultValue: true })
    isActive: boolean;
}

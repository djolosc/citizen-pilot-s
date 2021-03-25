import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Employee extends Model<Employee> {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Fname: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Lname: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

}
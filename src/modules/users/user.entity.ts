import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
<<<<<<< HEAD
  Fname: string;
=======
  fname: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lname: string;
>>>>>>> 4afa14f39ecac56a4aae98f341945af711fc5be3

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
<<<<<<< HEAD
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;


=======
    type: DataType.ARRAY(DataType.STRING),
  })
  favourites: string[];

  @Column({
    type: DataType.ARRAY(DataType.INTEGER),
  })
  voted: number[];
>>>>>>> 4afa14f39ecac56a4aae98f341945af711fc5be3
}

<<<<<<< HEAD
import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  readonly Fname: string;

  @IsNotEmpty()
  readonly Lname: string;
=======
import { IsNotEmpty, MinLength, IsEmail, IsOptional } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  readonly fname: string;

  @IsNotEmpty()
  readonly lname: string;
>>>>>>> 4afa14f39ecac56a4aae98f341945af711fc5be3

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
<<<<<<< HEAD
  //add an array!
=======

  @IsOptional()
  readonly favourites: string[];

  @IsOptional()
  readonly voted: number[];
>>>>>>> 4afa14f39ecac56a4aae98f341945af711fc5be3
}

import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class EmployeeDto {

  @IsNotEmpty()
  readonly Fname: string;

  @IsNotEmpty()
  readonly Lname: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

}
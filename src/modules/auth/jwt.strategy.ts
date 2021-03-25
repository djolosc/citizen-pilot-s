import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {EmployeeService} from '../employees/employee.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWTKEY,
    });
  }


  async validate(payload: any) {
    // check if user in the token actually exists
    const employee = this.employeeService.findOneById(payload.id);
    const user = await this.userService.findOneById(payload.id);
    if (!user && !employee ) {
      throw new UnauthorizedException('You are not authorized to perform the operation');
    }
    return payload;
  }
}

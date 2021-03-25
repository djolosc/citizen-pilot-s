import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../../core/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(user: UserDto): Promise<User> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.userRepository.create<User>(user);
  }
  
  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll<User>({
      include:[{model: User}]
    });
  }



  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }

<<<<<<< HEAD
=======
  // Add a favourite
  // async update(id, data) {
  //   console.log('data: ', data, 'id', id)
  //   const [numberOfAffectedRows, [updatedFavourites]] = await this.userRepository.update(
  //     { favourites: id }, { where: { data }, returning: true }
  //   );
  //   return { numberOfAffectedRows, updatedFavourites };
  // }

  // Delete a favourite

  // Add voted
>>>>>>> 4afa14f39ecac56a4aae98f341945af711fc5be3

}

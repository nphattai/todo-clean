import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos';
import { User } from 'src/core/entities';

@Injectable()
export class UserFactory {
  createUser(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.age = createUserDto.age;
    newUser.createdAt = new Date();
    newUser.updatedAt = new Date();
    return newUser;
  }

  updateUser(updateUserDto: UpdateUserDto) {
    const user = new User();
    user.name = updateUserDto.name;
    user.age = updateUserDto.age;
    user.updatedAt = new Date();
    return user;
  }
}

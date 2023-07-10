import { BadRequestException, Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos';
import { User } from 'src/core/entities';
import { UserFactory } from './user.factory';

@Injectable()
export class UserUseCase {
  constructor(
    private readonly dataServices: IDataServices,
    private readonly userFactory: UserFactory,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // map dto to entity
    const user = this.userFactory.createUser(createUserDto);

    // call service to create user
    const userCreated = await this.dataServices.users.create(user);

    // return user
    return userCreated;
  }

  async getUserById(id: string): Promise<User> {
    try {
      const user = await this.dataServices.users.get(id);

      if (!user) throw new BadRequestException('User not found');

      return user;
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<User[]> {
    try {
      const users = await this.dataServices.users.getAll();

      return users;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = this.userFactory.updateUser(updateUserDto);

      return await this.dataServices.users.update(id, user);
    } catch (error) {
      throw error;
    }
  }
}

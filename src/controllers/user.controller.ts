import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, UserResponseDto } from 'src/core/dtos';
import { UserUseCase } from 'src/use-cases/user/user.use-case';

@Controller('user')
export class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userUseCase.createUser(createUserDto);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.userUseCase.getUserById(id);

    return UserResponseDto.from(user);
  }

  @Get()
  async getUsers() {
    const users = await this.userUseCase.getAll();

    return users.map((user) => UserResponseDto.from(user));
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const success = await this.userUseCase.updateUser(id, updateUserDto);

    return success;
  }
}

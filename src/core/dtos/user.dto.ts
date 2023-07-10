import { User } from '../entities';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  name: string;

  age: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class UserResponseDto {
  id: string;

  name: string;

  age: number;

  isYoung: boolean;

  createdAt: Date;

  updatedAt: Date;

  static from(entity: User) {
    if (!entity) return null;

    const userResDto = new UserResponseDto();
    userResDto.id = entity._id.toHexString();
    userResDto.name = entity.name;
    userResDto.age = entity.age;
    userResDto.isYoung = entity.age < 18;
    userResDto.createdAt = entity.createdAt;
    userResDto.updatedAt = entity.updatedAt;
    return userResDto;
  }
}

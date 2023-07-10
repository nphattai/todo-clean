import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IDataServices, IGenericRepository } from 'src/core/abstracts';
import { User, UserDocument } from './models';
import { MongoGenericRepository } from './mongo-generic-repository';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  users: IGenericRepository<User>;

  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
  ) {}

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
  }
}

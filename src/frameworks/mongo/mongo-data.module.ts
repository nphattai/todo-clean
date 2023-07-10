import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { IDataServices } from 'src/core/abstracts';
import { User, UserSchema } from './models';
import { MongoDataServices } from './mongo-data.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forRoot('mongodb://localhost:27017/todo'),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataModule {}

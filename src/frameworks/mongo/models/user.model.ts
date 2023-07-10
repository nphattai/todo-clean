import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';

@Schema()
export class User {
  @Prop()
  _id: ObjectId;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;

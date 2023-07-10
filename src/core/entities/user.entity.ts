import { ObjectId } from 'mongodb';

export class User {
  _id: ObjectId;
  name: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
}

import { User } from './user.entity';

export class Todo {
  title: string;
  content: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
}

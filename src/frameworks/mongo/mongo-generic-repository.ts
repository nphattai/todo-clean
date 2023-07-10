import { ObjectId } from 'mongodb';
import { Model } from 'mongoose';

import { IGenericRepository } from 'src/core/abstracts';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private readonly _repository: Model<T>;
  private readonly _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  get(id: string): Promise<T> {
    return this._repository
      .findById(new ObjectId(id))
      .populate(this._populateOnFind)
      .exec() as Promise<T>;
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  async update(id: string, item: Partial<T>): Promise<boolean> {
    try {
      await this._repository.findByIdAndUpdate(new ObjectId(id), item);

      return true;
    } catch (error) {
      throw error;
    }
  }
}

import { Module } from '@nestjs/common';
import { MongoDataModule } from 'src/frameworks/mongo';

@Module({
  imports: [MongoDataModule],
  exports: [MongoDataModule],
})
export class DataServicesModule {}

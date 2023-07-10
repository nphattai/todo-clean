import { Module } from '@nestjs/common';
import { UserFactory } from './user.factory';
import { UserUseCase } from './user.use-case';
import { DataServicesModule } from 'src/services/data-services/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [UserFactory, UserUseCase],
  exports: [UserFactory, UserUseCase],
})
export class UserUseCaseModule {}

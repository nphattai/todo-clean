import { Module } from '@nestjs/common';

import { UserController } from './controllers';
import { DataServicesModule } from './services';
import { UserUseCaseModule } from './use-cases';

@Module({
  imports: [DataServicesModule, UserUseCaseModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeormModule } from 'src/infra/typeorm/typeorm/typeorm.module';
import { UsersProviders } from './users.providers';

@Module({
  imports: [TypeormModule],
  controllers: [UsersController],
  providers: [UsersService, ...UsersProviders],
  exports: [UsersService],
})
export class UsersModule {}

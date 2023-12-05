import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { PrismaService } from './infra/prisma/prisma.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, UsersModule],
  providers: [PrismaService],
})
export class AppModule {}

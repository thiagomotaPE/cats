import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { PrismaService } from './infra/prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CatsModule, UsersModule, TypeOrmModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule {}

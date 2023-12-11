import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { TypeormModule } from 'src/infra/typeorm/typeorm/typeorm.module';
import { catsProviders } from './cats.providers';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [TypeormModule],
  controllers: [CatsController],
  providers: [CatsService, PrismaService, ...catsProviders],
})
export class CatsModule {}

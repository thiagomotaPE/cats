import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { PrismaService } from './infra/prisma/prisma.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cats } from './cats/entities/cats.entity';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'cats',
      entities: [Cats],
      synchronize: true,
    }),
  ],
  providers: [PrismaService],
})
export class AppModule {}

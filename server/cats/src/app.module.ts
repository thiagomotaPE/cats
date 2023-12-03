import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { PrismaService } from './infra/prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CatsModule, ConfigModule.forRoot()],
  providers: [PrismaService],
})
export class AppModule {}

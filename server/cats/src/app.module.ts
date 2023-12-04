import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { PrismaService } from './infra/prisma/prisma.service';

@Module({
  imports: [CatsModule],
  providers: [PrismaService],
})
export class AppModule {}

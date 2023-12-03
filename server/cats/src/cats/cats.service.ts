import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Cat[]> {
    try {
      const allCats = await this.prisma.cats.findMany();
      return allCats;
    } catch (error) {
      throw new Error(
        'Erro ao buscar gatos no banco de dados: ' + error.message,
      );
    }
  }

  async create(createCatDto: CreateCatDto) {
    try {
      const newCat = await this.prisma.cats.create({
        data: {
          cat_name: createCatDto.name,
          cat_age: createCatDto.age,
          cat_breed: createCatDto.breed,
        },
      });
      return {
        newCat,
      };
    } catch (error) {
      throw new Error(
        'Erro ao adicionar gato no banco de dados: ' + error.message,
      );
    }
  }
}

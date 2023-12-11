import { Inject, Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
//import { PrismaService } from 'src/infra/prisma/prisma.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cats } from './entities/cats.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  //constructor(private readonly prisma: PrismaService) {}
  constructor(
    @Inject('CATS_REPOSITORY') 
    private catsRepository: Repository<Cats>,
    ) {}

  async findAll(): Promise<Cat[]> {
    try {
      const allCats = await this.catsRepository.find();
      return allCats;
    } catch (error) {
      throw new Error(
        'Erro ao buscar gatos no banco de dados: ' + error.message,
      );
    }
  }

  async create(createCatDto: CreateCatDto) {
    try {
      const newCat = this.catsRepository.save({
          cat_name: createCatDto.name,
          cat_age: createCatDto.age,
          cat_breed: createCatDto.breed,
      },);
      return {
        newCat,
      };
    } catch (error) {
      throw new Error(
        'Erro ao adicionar gato no banco de dados: ' + error.message,
      );
    }
   }

   async deleteById(id) {
    try {
      const cat = await this.catsRepository.findOne({where:{id: id}});
      return this.catsRepository.delete(cat);
      } catch (error) {
        throw new Error(
        'Erro ao deletar gato no banco de dados: ' + error.message,
        );
      }
    }
}

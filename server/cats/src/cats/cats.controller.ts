import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';

import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/role.enum';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  //Rota pra mostrar todos os gatos
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  //Rota para adicionar um gato ao banco de dados
  @Post()
  @Roles(Role.Admin)
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}

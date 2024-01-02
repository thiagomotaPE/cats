import { Body, Controller, Delete, Get, Param, Post, UseGuards, ValidationPipe } from '@nestjs/common';

import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { AuthGuard } from '@nestjs/passport';

// @UseGuards(AuthGuard('jwt'))
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
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Delete(':id')
  async deleteCatById(@Param('id') id: string) {
    return this.catsService.deleteById(+id);
  }
}

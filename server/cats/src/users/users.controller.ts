import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string ): Promise<User> {
        return this.usersService.findOneBy(id);
    }

    @Post()
    async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
        this.usersService.create(createUserDto);
    }
}

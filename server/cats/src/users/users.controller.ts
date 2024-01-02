import { Body, Controller, Delete, Get, Param, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';

// @UseGuards(AuthGuard('jwt'))
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

    @Delete(':id')
    async deleteUserById(@Param('id') id: string) {
        return this.usersService.deleteById(+id);
    }
}

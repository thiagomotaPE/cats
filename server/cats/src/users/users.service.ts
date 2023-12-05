import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    
    constructor(
        @Inject('USERS_REPOSITORY') 
        private usersRepository: Repository<Users>,
    ) {}
    
    async findAll(): Promise<User[]> {
    try {
        const allUsers = await this.usersRepository.find();
        return allUsers;
    } catch (error) {
        throw new Error(
        'Erro ao buscar usuarios no banco de dados: ' + error.message,
        );
    }
    }
    
    async create(createUserDto: CreateUserDto) {
        try {
            const newUser = this.usersRepository.save({
                user_name: createUserDto.name,
                user_email: createUserDto.email,
                user_password: createUserDto.password,
            },);
            return {
            newUser,
            };
        } catch (error) {
            throw new Error(
            'Erro ao adicionar usuario no banco de dados: ' + error.message,
            );
        }
    }
}

import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

    constructor(
        @Inject('USERS_REPOSITORY') 
        private usersRepository: Repository<Users>,
    ) {}

    private async hashPassword(password: string): Promise<string> {
        const saltOrRounds = 10;
        return bcrypt.hash(password, saltOrRounds);
      }
    
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

    async findOneBy(id: string): Promise<User> {
        try {
            const user = await this.usersRepository.findOne({where:{id: id}});
            return user;
        } catch (error) {
            throw new Error(
            'Erro ao buscar usuario no banco de dados: ' + error.message,
            );
        }
    }

    async findOneByEmail(email: string): Promise<User> {
        try {
            const user = await this.usersRepository.findOne({where:{user_email: email}});
            return user;
        } catch (error) {
            throw new Error(
            'Erro ao buscar usuario no banco de dados: ' + error.message,
            );
        }
    }
    
    async create(createUserDto: CreateUserDto) {
        try {
            const hashedPassword = await this.hashPassword(createUserDto.password);

            const newUser = this.usersRepository.save({
                user_name: createUserDto.name,
                user_email: createUserDto.email,
                user_password: hashedPassword,
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

    async deleteById(id) {
        try {
          const user = await this.usersRepository.findOne({where:{id: id}});
          return this.usersRepository.delete(user);
          } catch (error) {
            throw new Error(
            'Erro ao deletar usuario do banco de dados: ' + error.message,
            );
          }
        }
}
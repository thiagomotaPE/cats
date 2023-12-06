import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { Users } from 'src/users/entities/users.entity';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {}

    async validateUser(email: string, password: string) {
        let user: User
        try {
            user = await this.userService.findOneByEmail(email);
            if(!user) throw "Usuario não cadastrado"
        } catch (error) {
            return error;
        }

        const isPasswordValid = await bcrypt.compare(password, user.user_password);
        if(!isPasswordValid) return null;

        return user;
    }
}

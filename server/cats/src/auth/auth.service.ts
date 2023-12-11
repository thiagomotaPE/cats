import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private readonly jwtService: JwtService) {}

    async validateUser(email: string, password: string) {
        let user: User
        try {
            user = await this.userService.findOneByEmail(email);
            if(!user) return null; 
        } catch (error) {
            return error;
        }
        const isPasswordValid = await bcrypt.compare(password, user.user_password);
        if(!isPasswordValid) return null;

        return user;
    }

    async generateToken(user: User) {
        const payload = {sub: user.id, name: user.user_name, email: user.user_email};

        return {
            token: this.jwtService.sign(payload),
        };
    }
}

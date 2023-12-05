import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { Users } from 'src/users/entities/users.entity';
import { identity } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {}

    async signIn(signInDto: SignInDto): Promise<any> {
        const user = await this.userService.findOneById(signInDto.id);
    }
}

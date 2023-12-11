import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LogInDto } from './dto/log-in.dto';

@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body() logInDto: LogInDto) {
        const user = this.authService.validateUser(logInDto.email, logInDto.password);
        if (!user) return null;

        return this.authService.generateToken(await user);
    }
}

import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LogInDto } from './dto/log-in.dto';

@Controller('api/auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() logInDto: LogInDto) {
        return this.authService.validateUser(logInDto.email, logInDto.password);
    }
}

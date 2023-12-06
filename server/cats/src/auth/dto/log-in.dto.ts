import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class LogInDto {
  
  @IsString({ message: 'Nome precisa ser uma string' })
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  name: string;

  @IsEmail()  
  @IsNotEmpty({ message: 'E-mail não pode ser vazio' })
  email: string;

  @IsStrongPassword()
  @IsNotEmpty({ message: 'Senha não pode ser vazia' })
  password: string;
}
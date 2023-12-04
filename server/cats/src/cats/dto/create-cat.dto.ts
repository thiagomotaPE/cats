import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCatDto {
  
  @IsString({ message: 'Nome precisa ser uma string' })
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  name: string;

  @IsInt({ message: 'Idade precisa ser um numero' })
  @IsNotEmpty({ message: 'Idade não pode ser vazio' })
  age: number;

  @IsString({ message: 'Raça precisa ser uma string' })
  @IsNotEmpty({ message: 'Raça não pode ser vazio' })
  breed: string;
}

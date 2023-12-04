import { Module } from '@nestjs/common';
import { TypeormProviders123 } from './typeorm.providers';

@Module({
    providers: [...TypeormProviders123],
    exports: [...TypeormProviders123],
})
export class TypeormModule {}

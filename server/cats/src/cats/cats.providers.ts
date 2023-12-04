import { DataSource } from "typeorm"
import { Cats } from "./entities/cats.entity"

export const catsProviders = [{
    provide: 'CATS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Cats),
    inject: ['DATA_SOURCE'],
}]
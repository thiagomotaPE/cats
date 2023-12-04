import { Cats } from 'src/cats/entities/cats.entity';
import { DataSource } from 'typeorm'

export const TypeormProviders123 = [{
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'db/sql',
        entities: [Cats],
        synchronize: true,
      });

      return dataSource.initialize();
    },
}]

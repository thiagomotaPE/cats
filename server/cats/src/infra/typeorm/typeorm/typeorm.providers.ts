import { Cats } from 'src/cats/entities/cats.entity';
import { Users } from 'src/users/entities/users.entity';
import { DataSource } from 'typeorm'

export const TypeormProviders123 = [{
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'db/sql',
        entities: [Cats, Users],
        synchronize: true,
      });

      return dataSource.initialize();
    },
}]

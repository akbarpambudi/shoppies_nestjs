import { TypeOrmModule } from '@nestjs/typeorm';
import { Catalog } from './catalog/catalog.entity';

export const ORM_PROVIDER = TypeOrmModule.forRoot({
  type: 'postgres',
  host: '192.168.99.100',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [Catalog],
  synchronize: true,
  migrations: ['migration/*.ts'],
  cli: {
    migrationsDir: 'migration',
  },
});

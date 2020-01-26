import { Module } from '@nestjs/common';
import { Catalog } from './catalog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

const TYPE_ORM_ENTITIES_OR_REPO = [Catalog];
@Module({
  imports: [TypeOrmModule.forFeature([...TYPE_ORM_ENTITIES_OR_REPO])],
})
export class CatalogModule {}

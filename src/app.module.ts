import { Module } from '@nestjs/common';
import { CatalogModule } from './catalog/catalog.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [CatalogModule, CartModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

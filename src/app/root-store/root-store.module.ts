import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStoreModule } from './auth-store/auth-store.module';
import { EntityOrderStoreModule } from './entity-order-store/entity-order-store.module';
import { OrderEntityStoreModule } from './order-entity-store/order-entity-store.module';
import { ProductEntityStoreModule } from './product-entity-store/product-entity-store.module';

@NgModule({
  imports: [CommonModule, AuthStoreModule, EntityOrderStoreModule, OrderEntityStoreModule, ProductEntityStoreModule],
  declarations: []
})
export class RootStoreModule {}

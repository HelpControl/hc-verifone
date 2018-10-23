import { ProductEntityStoreModule } from './product-entity-store.module';

describe('ProductEntityStoreModule', () => {
  let productEntityStoreModule: ProductEntityStoreModule;

  beforeEach(() => {
    productEntityStoreModule = new ProductEntityStoreModule();
  });

  it('should create an instance', () => {
    expect(productEntityStoreModule).toBeTruthy();
  });
});

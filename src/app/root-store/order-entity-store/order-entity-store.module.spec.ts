import { OrderEntityStoreModule } from './order-entity-store.module';

describe('OrderEntityStoreModule', () => {
  let orderEntityStoreModule: OrderEntityStoreModule;

  beforeEach(() => {
    orderEntityStoreModule = new OrderEntityStoreModule();
  });

  it('should create an instance', () => {
    expect(orderEntityStoreModule).toBeTruthy();
  });
});

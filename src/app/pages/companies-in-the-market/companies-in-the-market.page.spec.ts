import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesInTheMarketPage } from './companies-in-the-market.page';

describe('CompaniesInTheMarketPage', () => {
  let component: CompaniesInTheMarketPage;
  let fixture: ComponentFixture<CompaniesInTheMarketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesInTheMarketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesInTheMarketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

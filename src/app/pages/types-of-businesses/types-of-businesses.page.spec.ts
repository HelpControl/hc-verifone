import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfBusinessesPage } from './types-of-businesses.page';

describe('TypesOfBusinessesPage', () => {
  let component: TypesOfBusinessesPage;
  let fixture: ComponentFixture<TypesOfBusinessesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesOfBusinessesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesOfBusinessesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

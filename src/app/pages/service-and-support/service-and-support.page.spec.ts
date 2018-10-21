import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAndSupportPage } from './service-and-support.page';

describe('ServiceAndSupportPage', () => {
  let component: ServiceAndSupportPage;
  let fixture: ComponentFixture<ServiceAndSupportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAndSupportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAndSupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

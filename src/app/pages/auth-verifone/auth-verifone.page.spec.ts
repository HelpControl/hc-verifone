import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthVerifonePage } from './auth-verifone.page';

describe('AuthVerifonePage', () => {
  let component: AuthVerifonePage;
  let fixture: ComponentFixture<AuthVerifonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthVerifonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthVerifonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

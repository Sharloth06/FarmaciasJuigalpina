import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MismedicamentosPage } from './mismedicamentos.page';

describe('MismedicamentosPage', () => {
  let component: MismedicamentosPage;
  let fixture: ComponentFixture<MismedicamentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MismedicamentosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MismedicamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

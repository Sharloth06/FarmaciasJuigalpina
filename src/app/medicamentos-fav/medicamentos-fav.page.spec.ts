import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosFavPage } from './medicamentos-fav.page';

describe('MedicamentosFavPage', () => {
  let component: MedicamentosFavPage;
  let fixture: ComponentFixture<MedicamentosFavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentosFavPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentosFavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesPage } from './promociones.page';

describe('PromocionesPage', () => {
  let component: PromocionesPage;
  let fixture: ComponentFixture<PromocionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

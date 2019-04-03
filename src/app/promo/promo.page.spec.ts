import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoPage } from './promo.page';

describe('PromoPage', () => {
  let component: PromoPage;
  let fixture: ComponentFixture<PromoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

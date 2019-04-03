import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasproductosPage } from './masproductos.page';

describe('MasproductosPage', () => {
  let component: MasproductosPage;
  let fixture: ComponentFixture<MasproductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasproductosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

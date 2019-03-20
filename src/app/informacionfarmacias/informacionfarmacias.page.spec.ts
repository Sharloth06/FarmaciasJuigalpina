import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionfarmaciasPage } from './informacionfarmacias.page';

describe('InformacionfarmaciasPage', () => {
  let component: InformacionfarmaciasPage;
  let fixture: ComponentFixture<InformacionfarmaciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionfarmaciasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionfarmaciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

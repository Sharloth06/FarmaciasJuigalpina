import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciasPage } from './farmacias.page';

describe('FarmaciasPage', () => {
  let component: FarmaciasPage;
  let fixture: ComponentFixture<FarmaciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmaciasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzondesugerenciasPage } from './buzondesugerencias.page';

describe('BuzondesugerenciasPage', () => {
  let component: BuzondesugerenciasPage;
  let fixture: ComponentFixture<BuzondesugerenciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzondesugerenciasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzondesugerenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

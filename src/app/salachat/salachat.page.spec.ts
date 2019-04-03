import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalachatPage } from './salachat.page';

describe('SalachatPage', () => {
  let component: SalachatPage;
  let fixture: ComponentFixture<SalachatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalachatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalachatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartesPage } from './apartes.page';

describe('ApartesPage', () => {
  let component: ApartesPage;
  let fixture: ComponentFixture<ApartesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

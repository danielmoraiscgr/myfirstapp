import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendasPage } from './fazendas.page';

describe('FazendasPage', () => {
  let component: FazendasPage;
  let fixture: ComponentFixture<FazendasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FazendasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FazendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

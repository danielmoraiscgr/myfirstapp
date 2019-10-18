import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaanimalPage } from './fichaanimal.page';

describe('FichaanimalPage', () => {
  let component: FichaanimalPage;
  let fixture: ComponentFixture<FichaanimalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaanimalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaanimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacasPage } from './racas.page';

describe('RacasPage', () => {
  let component: RacasPage;
  let fixture: ComponentFixture<RacasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

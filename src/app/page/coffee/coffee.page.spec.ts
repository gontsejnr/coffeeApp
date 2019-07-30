import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeePage } from './coffee.page';

describe('CoffeePage', () => {
  let component: CoffeePage;
  let fixture: ComponentFixture<CoffeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

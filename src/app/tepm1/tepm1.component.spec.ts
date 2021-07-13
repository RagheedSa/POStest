import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tepm1Component } from './tepm1.component';

describe('Tepm1Component', () => {
  let component: Tepm1Component;
  let fixture: ComponentFixture<Tepm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tepm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tepm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

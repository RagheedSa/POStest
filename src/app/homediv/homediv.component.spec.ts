import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedivComponent } from './homediv.component';

describe('HomedivComponent', () => {
  let component: HomedivComponent;
  let fixture: ComponentFixture<HomedivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomedivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

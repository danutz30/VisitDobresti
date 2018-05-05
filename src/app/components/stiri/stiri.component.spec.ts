import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StiriComponent } from './stiri.component';

describe('StiriComponent', () => {
  let component: StiriComponent;
  let fixture: ComponentFixture<StiriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StiriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

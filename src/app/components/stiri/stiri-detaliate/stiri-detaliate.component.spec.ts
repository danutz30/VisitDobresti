import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StiriDetaliateComponent } from './stiri-detaliate.component';

describe('StiriDetaliateComponent', () => {
  let component: StiriDetaliateComponent;
  let fixture: ComponentFixture<StiriDetaliateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StiriDetaliateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StiriDetaliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

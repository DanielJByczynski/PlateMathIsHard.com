import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricCalculatorComponent } from './metric-calculator.component';

describe('MetricCalculatorComponent', () => {
  let component: MetricCalculatorComponent;
  let fixture: ComponentFixture<MetricCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

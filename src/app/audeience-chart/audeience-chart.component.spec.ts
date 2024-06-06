import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudeienceChartComponent } from './audeience-chart.component';

describe('AudeienceChartComponent', () => {
  let component: AudeienceChartComponent;
  let fixture: ComponentFixture<AudeienceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudeienceChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudeienceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwsandRevenueChartComponent } from './veiwsand-revenue-chart.component';

describe('VeiwsandRevenueChartComponent', () => {
  let component: VeiwsandRevenueChartComponent;
  let fixture: ComponentFixture<VeiwsandRevenueChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeiwsandRevenueChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeiwsandRevenueChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

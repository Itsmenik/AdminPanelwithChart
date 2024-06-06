import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberWatchTimechartComponent } from './subscriber-watch-timechart.component';

describe('SubscriberWatchTimechartComponent', () => {
  let component: SubscriberWatchTimechartComponent;
  let fixture: ComponentFixture<SubscriberWatchTimechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriberWatchTimechartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriberWatchTimechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

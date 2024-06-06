import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestCommentComponent } from './latest-comment.component';

describe('LatestCommentComponent', () => {
  let component: LatestCommentComponent;
  let fixture: ComponentFixture<LatestCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestCommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

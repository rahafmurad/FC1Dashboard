import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclerProgressComponent } from './circler-progress.component';

describe('CirclerProgressComponent', () => {
  let component: CirclerProgressComponent;
  let fixture: ComponentFixture<CirclerProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirclerProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CirclerProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

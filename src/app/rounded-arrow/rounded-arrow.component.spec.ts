import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedArrowComponent } from './rounded-arrow.component';

describe('RoundedArrowComponent', () => {
  let component: RoundedArrowComponent;
  let fixture: ComponentFixture<RoundedArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundedArrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoundedArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

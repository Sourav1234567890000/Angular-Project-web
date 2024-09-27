import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialLowerComponent } from './testimonial-lower.component';

describe('TestimonialLowerComponent', () => {
  let component: TestimonialLowerComponent;
  let fixture: ComponentFixture<TestimonialLowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialLowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialLowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

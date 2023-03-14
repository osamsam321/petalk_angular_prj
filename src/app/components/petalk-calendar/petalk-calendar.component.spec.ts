import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetalkCalendarComponent } from './petalk-calendar.component';

describe('PetalkCalendarComponent', () => {
  let component: PetalkCalendarComponent;
  let fixture: ComponentFixture<PetalkCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetalkCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetalkCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

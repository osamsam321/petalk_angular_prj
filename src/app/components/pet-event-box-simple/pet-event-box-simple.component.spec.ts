import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetEventBoxSimpleComponent } from './pet-event-box-simple.component';

describe('PetEventBoxSimpleComponent', () => {
  let component: PetEventBoxSimpleComponent;
  let fixture: ComponentFixture<PetEventBoxSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetEventBoxSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetEventBoxSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

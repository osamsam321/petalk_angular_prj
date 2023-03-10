import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPetalkComponent } from './new-petalk.component';

describe('NewPetalkComponent', () => {
  let component: NewPetalkComponent;
  let fixture: ComponentFixture<NewPetalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPetalkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPetalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

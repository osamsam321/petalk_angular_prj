import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPetCarouselComponent } from './your-pet-carousel.component';

describe('YourPetCarouselComponent', () => {
  let component: YourPetCarouselComponent;
  let fixture: ComponentFixture<YourPetCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourPetCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourPetCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

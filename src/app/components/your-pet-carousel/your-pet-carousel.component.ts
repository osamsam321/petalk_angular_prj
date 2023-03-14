import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../home/homeInterface';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap/carousel/carousel.module';


@Component({
  selector: 'app-your-pet-carousel',
  templateUrl: './your-pet-carousel.component.html',
  styleUrls: ['./your-pet-carousel.component.css']
})
export class YourPetCarouselComponent implements OnInit, OnChanges, AfterViewInit{
  @Input() petalk_user!: User;
  public has_pets: boolean = false;
  petalk_pets: PetalkPet[] = [];
  constructor() { }
  ngAfterViewInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.updatePetalkPets();
  }

  ngOnInit(): void {
  
  }
  updatePetalkPets()
  { 
    let pets = Array.from(this.petalk_user.petsOwnedByUsers);
    for (const pet of pets) {
      this.petalk_pets.push(new PetalkPet(pet.pet_name));
    }

    if(pets != null && pets != undefined && pets.length > 0)
      this.has_pets = true;
  }


  
}

class PetalkPet{

  pet_name!: string;

  constructor(pet_name:string)
  {
    this.pet_name = pet_name;
  }
}

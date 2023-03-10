export interface Pet
{
     id: number;
  pet_name: string;
  pet_weight: number;
  weight_uom_abbr: string;
  pet_height: number;
  pet_width: number;
  pet_length: number;
  lwh_uom_abbr: string;
  species: string;
  animalBreeds: string[];
  petWithPetalkDevices: Set<PetalkDevice>

     
}
// export interface PetList
// {
//      pets: Pet[];
// }
export interface User
{

     id: number;
     first_name: string;
     last_name: string;
     email: string;
     username: string;
     // roles: Set<Role>;
     // userLocations: Set<Location>;
     petalkDevices: Set<PetalkDevice>;
     petsOwnedByUsers: Set<Pet>;

     // purchaseAudit: Set<PurchaseAudit>;
}
export interface PetalkDevice {
     id: number;
     device_name: string;
     purchased_ts?: Date;
     first_used_ts: Date;
     sku_value: string;
     upc_value: string;
     upc_barcode_img_path: string;
     petalkDeviceTriggers: Set<PetalkDeviceTrigger>;
   }

   export interface PetalkDeviceTrigger {
     id: number;
     trigger_ts: Date;
     device_name: string;
     petalkTriggerLocation?: Location;
     triggerType: string;
     pet_name: string;
     // petalkDevices?: PetalkDevice[];
   }
   
   
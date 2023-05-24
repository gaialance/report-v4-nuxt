export interface Business {
    name: string;
    id: string;
};
  
export interface Restaurant extends Business {
}

export interface RestaurantRaw {
  _id: string;
  profile: RestaurantRawProfile
}

interface RestaurantRawProfile {
  name: string;
}

interface WarehouseRawProfile {
  address:{
    line1:string,
    line2:string,
    state:string,
    city:string,
    postcode:string,
  },
  email:string,
  name:string,
  phoneNo:string,
  regNo:string // Dont know need or not show to outside not that great
}
export interface WarehouseRaw {
  profile:WarehouseRawProfile
  _id:string
}

export interface Warehouse extends Business {
}
  
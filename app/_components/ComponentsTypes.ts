

export interface Cabin {
 id: number;
 name: string;
 maxCapacity: number;
 regularPrice: number;
 discount: number;
 description: string;
 image: string ;
}


export interface CabinCardProps {
  cabin: Cabin
}
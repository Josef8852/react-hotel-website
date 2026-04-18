

export interface Cabin {
 id: number;
 name: string;
 maxCapacity: number;
 regularPrice: number;
 discount: number;
 image: string ;
}


export interface Booking {
  id: number;
  created_at: Date | string | number; 
  startDate: Date; 
  endDate: Date; 
  numNights: number; 
  numGuests: number; 
  cabinPrice: number; 
  extrasPrice: number; 
  totalPrice: number;
  observations: string;
  status:  "unconfirmed" | "checked_in" | "checked_out";
  hasBreakfast: boolean; 
  isPaid: boolean; 
  observasions: string; 
  cabins: Cabin;
  cabinID: number; 
  guestID: number;
}


export interface CabinCardProps {
  cabin: Cabin
}


export interface SelectCountryProps {
  id: string; 
  defaultCountry: string;
  name: string; 
  className: string;
}


export interface BookingCardProps {
  booking: Booking; 
}


export interface DeleteBookingProps {
  bookingId: number; 
}


export type FilterType = "all" | "small" | "medium" | "large";



export interface Country {
  name: string; 
  flag: string; 
  independent: boolean; 
}


export interface UpdateProfileFormProps {
  children: React.ReactNode;
}
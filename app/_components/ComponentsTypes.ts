

export interface Cabin {
 id: string;
 name: string;
 maxCapacity: number;
 regularPrice: number;
  discount: number;
  description: string; 
 image: string ;
}


export interface Setting {
  minBookingLength: number; 
  maxBookingLength: number; 
  maxNumberGuestsPerBooking: number; 
  breakfastPrice: number; 
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


export interface BookingProps {
  cabin: Cabin; 
}



export interface DateSelectorProps {
  cabin: Cabin; 
  bookedDates: Array<Date>;
  settings: Setting;
}

export interface BookingFormProps {
  cabin: Cabin; 
}


export interface CabinInfoProps {
  
  cabin: Cabin; 
  
}
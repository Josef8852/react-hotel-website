import { User } from "next-auth";
import { Guest } from "../_services/apiGuest";


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
  id: string;
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
  cabins: { name : string , image : string};
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
  booking: Partial<Booking>; 
}


export interface DeleteBookingProps {
  bookingId: string; 
}


export type FilterType = "all" | "small" | "medium" | "large";



export interface Country {
  name: string; 
  flag: string; 
  independent: boolean; 
}


export interface UpdateProfileFormProps {
  children: React.ReactNode;
  guest: Guest;
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
  user: User;
}


export interface CabinInfoProps {
  
  cabin: Cabin; 
  
}


export interface SubmitButtonProps {
  children: React.ReactNode; 
  submitLabel: string; 
}


export interface MobileNavMenuProps {
  isLoggedIn: boolean;
  userImage?: string | null;  
  userName?: string | null; 
}
import { Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";




export interface BookingProviderProps {
  children: React.ReactNode;
}


export interface BookingContextProps {
  range: DateRange | undefined; 
  setRange: Dispatch<SetStateAction<DateRange | undefined>>;
  resetRange: () => void; 
}
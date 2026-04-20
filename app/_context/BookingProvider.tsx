"use client"

import { createContext, useState } from "react"
import { DateRange } from "react-day-picker"
import { BookingContextProps, BookingProviderProps } from "./contextTypes";


export const BookingContext = createContext<BookingContextProps>({
  range: undefined, 
  setRange : () => {},
  resetRange : () => {}
});


export const BookingProvider:React.FC<BookingProviderProps> = ({children}) => {
  
  const [range, setRange] = useState<DateRange | undefined>(undefined)
  
  const resetRange = () => {
    setRange(undefined);
  }
  
  return (
    <BookingContext.Provider value={
      {range, setRange , resetRange}
    } >
      {children}
    </BookingContext.Provider>
  )
  
}

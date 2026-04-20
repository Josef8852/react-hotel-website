"use client"

import { useContext } from "react"
import { BookingContext } from "./BookingProvider";



const useBooking = () => {
  
  const context = useContext(BookingContext);
  
  if (!context) throw new Error("Context was used outside Provider"); 
  
  return context; 
  
}

export default useBooking; 
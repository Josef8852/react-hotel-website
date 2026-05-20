import { eachDayOfInterval } from 'date-fns';
import { supabase } from './supabase';
import { Booking } from '../_components/ComponentsTypes';





export const  getBooking = async (id:string) : Promise<Booking> => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not get loaded');
  }

  return data;
}

export const getBookings = async (guestId:string) : Promise<Partial<Booking>[]> =>  {
  const { data, error } = await supabase
    .from('bookings')
    
    .select(
      'id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestID, cabinID, cabins(name, image)'
    )
    .eq('guestID', guestId)
    .order('startDate');

  if (error) {
    console.error(error);
    throw new Error('Bookings could not get loaded');
  }

  return (data ?? []).map((booking) => ({
    ...booking,
    cabins: Array.isArray(booking.cabins) ? booking.cabins[0] : booking.cabins,
  }));
}

export const getBookedDatesByCabinId = async (cabinId: string) : Promise<Array<Date>> => {
  
  let today : Date | string = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();


  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('cabinID', cabinId)
    .or(`startDate.gte.${today},status.eq.checked_in`);

  if (error) {
    console.error(error);
    throw new Error('Bookings could not get loaded');
  }


  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}







export const createBooking = async (newBooking:Partial<Booking>)  => {
  const { error } = await supabase
    .from('bookings')
    .insert([newBooking]);
  
  if (error) {
    console.error(error);
    throw new Error('Booking could not be created');
  }


}




export const updateBooking = async (id:string, updatedFields:Partial<Booking>) => {
  const { data, error } = await supabase
    .from('bookings')
    .update(updatedFields)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be updated');
  }
  return data;
}



export const deleteBooking = async (id:string) => {
  const { data, error } = await supabase.from('bookings').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be deleted');
  }
  return data;
}
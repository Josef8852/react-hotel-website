import { eachDayOfInterval } from 'date-fns';
import { supabase } from './supabase';
import { Booking } from '../_components/ComponentsTypes';





export const  getBooking = async (id:number) => {
  const { data, error, count } = await supabase
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

export const getBookings = async (guestId:number) =>  {
  const { data, error, count } = await supabase
    .from('bookings')
    
    .select(
      'id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)'
    )
    .eq('guestId', guestId)
    .order('startDate');

  if (error) {
    console.error(error);
    throw new Error('Bookings could not get loaded');
  }

  return data;
}

export const getBookedDatesByCabinId = async (cabinId:number) =>  {
  let today : Date | string = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();


  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('cabinId', cabinId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

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







export const createBooking = async (newBooking:Booking)  => {
  const { data, error } = await supabase
    .from('bookings')
    .insert([newBooking])

    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be created');
  }

  return data;
}




export const updateBooking = async (id:number, updatedFields:Partial<Booking>) => {
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



export const deleteBooking = async (id:number) => {
  const { data, error } = await supabase.from('bookings').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be deleted');
  }
  return data;
}
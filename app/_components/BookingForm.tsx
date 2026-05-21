"use client"

import Image from "next/image";
import useBooking from "../_context/useBooking";
import { Booking, BookingFormProps } from "./ComponentsTypes";
import { differenceInDays } from "date-fns/fp";
import { createBookingAction } from "../_services/actions";
import SubmitButton from "./SubmitButton";





const BookingForm:React.FC<BookingFormProps> = ({cabin , user})  => {

  const { maxCapacity , regularPrice , discount , id } = cabin;
  
  const { range , resetRange } = useBooking();

  const startDate  = range?.from; 

  const endDate = range?.to; 

  const numNights = endDate && startDate ? differenceInDays(endDate, startDate) : 0;

  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData : Partial<Booking> = {
    startDate, 
    endDate, 
    numNights, 
    cabinPrice, 
    cabinID : Number(id)
  }


  // will become the first arg
  const createBookingWithData = createBookingAction.bind(null, bookingData);
  

  return (
    <div className='scale-[1.01]'>
      <div className='bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center'>

        <div className='flex gap-4 items-center'>
          <Image
            referrerPolicy='no-referrer'
            className='h-8 rounded-full'
            src={String(user.image)}
            alt={String(user.name)}
            width={30}
            height={30}
          />
                  <p>Logged in as {user.name}</p>
        </div> 
      </div>
        
      {range?.to && range?.from ? <p>{String(range.from)} to {String(range.to)}</p> : null }
      
      <form
        action={async (formData) => {
           resetRange();
        await createBookingWithData(formData);
      }}
        className='bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col'>
        <div className='space-y-2'>
          <label htmlFor='numGuests'>How many guests?</label>
          <select
            name='numGuests'
            id='numGuests'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            required
          >
            <option value='' key=''>
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='observations'>
            Anything we should know about your stay?
          </label>
          <textarea
            name='observations'
            id='observations'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            placeholder='Any pets, allergies, special requirements, etc.?'
          />
        </div>

        <div className='flex justify-end items-center gap-6'>

          {
            !startDate && !endDate ? <p className='text-primary-300 text-base'>Start by selecting dates</p>
              :  <SubmitButton submitLabel="Booking...">
                Book now
              </SubmitButton>
          }
           
        </div>
      </form>
    </div>
  );
}

export default BookingForm; 
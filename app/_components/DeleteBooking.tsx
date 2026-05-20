"use client"

import { TrashIcon } from '@heroicons/react/24/solid';
import { DeleteBookingProps } from './ComponentsTypes';
import { deleteBookingAction } from '../_services/actions';
import { useTransition } from 'react';
import MiniSpinner from './MiniSpinner';

const DeleteBooking: React.FC<DeleteBookingProps> = ({ bookingId }) => {
  
  const [isPending , startTransition] = useTransition();

  const handleDelete = (): void => {

    if (confirm("Are you sure you want to delete this Booking?")) {
      startTransition(() => deleteBookingAction(bookingId));
    }
    
    
    
  }
  
  return (
    <button disabled={isPending} onClick={handleDelete} className=' hover:cursor-pointer group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900'>
      {
        isPending ? <span className='mx-auto'><MiniSpinner /></span> :
          <><TrashIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
        <span className='mt-1'>Delete</span></>
        }
    </button>
  );
}

export default DeleteBooking;
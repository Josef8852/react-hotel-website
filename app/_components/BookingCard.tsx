import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { format, isPast, isToday } from 'date-fns';
import { BookingCardProps } from './ComponentsTypes';
import { formatDistanceFromNow } from '../_utils/helpers';
import Image from 'next/image';
import DeleteBooking from './DeleteBooking';
import Link from 'next/link';



const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {
  
  
  const {
    id,
    guestID,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    cabins,
    created_at,
  } = booking;


  const { name, image } = cabins!;
  
  return (
    <div className='flex border border-primary-800'>
      <div className='relative h-28 sm:h-32 aspect-square flex-shrink-0'>
        <Image
          src={image!}
          fill
          alt={`Cabin ${name}`}
          className='object-cover border-r border-primary-800'
        />
      </div>

      <div className='grow px-3 sm:px-6 py-2 sm:py-3 flex flex-col min-w-0'>
        <div className='flex items-start justify-between gap-2'>
          <h3 className='text-xs sm:text-base font-semibold leading-tight'>
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate!)) ? (
            <span className='bg-yellow-800 text-yellow-200 h-5 sm:h-7 px-2 sm:px-3 uppercase text-[10px] sm:text-xs font-bold flex items-center rounded-sm flex-shrink-0'>
              past
            </span>
          ) : (
            <span className='bg-green-800 text-green-200 h-5 sm:h-7 px-2 sm:px-3 uppercase text-[10px] sm:text-xs font-bold flex items-center rounded-sm flex-shrink-0'>
              upcoming
            </span>
          )}
        </div>

        <p className='text-[11px] sm:text-sm text-primary-300 truncate mt-1'>
          {format(new Date(startDate!), 'MMM dd yyyy')} (
          {isToday(new Date(startDate!))
            ? 'Today'
            : formatDistanceFromNow(String(startDate))}
          ) &mdash; {format(new Date(endDate!), 'MMM dd yyyy')}
        </p>

        <div className='flex flex-wrap gap-1 sm:gap-5 mt-auto items-baseline'>
          <p className='text-sm sm:text-lg font-semibold text-accent-400'>${totalPrice}</p>
          <p className='text-primary-300 text-xs'>&bull;</p>
          <p className='text-xs sm:text-sm text-primary-300'>
            {numGuests} guest{numGuests! > 1 && 's'}
          </p>
          <p className='ml-auto text-[10px] sm:text-xs text-primary-400 hidden sm:block'>
            Booked {format(new Date(created_at!), 'EEE, MMM dd yyyy, p')}
          </p>
        </div>
      </div>

        {
          isPast(startDate!) ? null : (
            <div className='flex flex-col border-l border-primary-800 w-20 sm:w-25 flex-shrink-0'>
            <Link
              href={`/account/bookings/edit/${id}`}
              className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900'
            >
              <PencilSquareIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
              <span className='mt-1'>Edit</span>
            </Link>
              <DeleteBooking bookingId={id!} />
            </div>
          )
          }
    </div>
  );
}

export default BookingCard;


import SubmitButton from "@/app/_components/SubmitButton";
import { updateBookingAction } from "@/app/_services/actions";
import { getBooking } from "@/app/_services/apiBookings";
import { getCabin } from "@/app/_services/apiCabins";
import { Metadata } from "next";



interface PageProps {
  params : Promise<{bookingId : string}>
}

export const generateMetadata = async ({params} : PageProps) : Promise<Metadata> => {
  
  const { bookingId } = await params;
  
  return {
    title: `Booking ${bookingId}`
  }
  
} 



const  Page = async ({params} : PageProps) =>  {
  // CHANGE

  const { bookingId } = await params;

  const booking = await getBooking(bookingId);

  const { numGuests, cabinID , observations } = booking;

  const {maxCapacity} = await getCabin(String(cabinID));

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Booking #{bookingId}
      </h2>

      <form action={updateBookingAction} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            defaultValue={numGuests}
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            defaultValue={observations}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>


        <div className="space-y-2">
          <input type="hidden" name="bookingId" defaultValue={bookingId} />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton submitLabel="Updating...">
            Update Booking
            </SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default Page; 
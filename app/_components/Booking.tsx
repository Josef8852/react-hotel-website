import { getBookedDatesByCabinId } from "../_services/apiBookings";
import { getSettings } from "../_services/apiSettings";
import BookingForm from "./BookingForm";
import { BookingProps } from "./ComponentsTypes";
import DateSelector from "./DateSelector";



const Booking:React.FC<BookingProps> = async  ({cabin}) => {
  
  const [ settings, bookedDates] = await
    Promise.all([getSettings(), getBookedDatesByCabinId(cabin.id)]);
  

  return (
    <div className="flex flex-col border border-primary-800 p-7 gap-10">
      <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin} />
    <BookingForm cabin={cabin} />
  </div>
  )
  
  
}



export default Booking; 
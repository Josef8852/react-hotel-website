import { getBookedDatesByCabinId } from "../_services/apiBookings";
import { getSettings } from "../_services/apiSettings";
import { auth } from "../_services/auth";
import BookingForm from "./BookingForm";
import { BookingProps } from "./ComponentsTypes";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";



const Booking:React.FC<BookingProps> = async  ({cabin}) => {
  
  const [ settings, bookedDates] = await
    Promise.all([getSettings(), getBookedDatesByCabinId(cabin.id)]);

  const session = await auth(); 
  
  return (
    <div className="flex flex-col border border-primary-800 p-7 gap-10">
      <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin} />
      {
        session?.user ? <BookingForm cabin={cabin} user={session.user} /> : <LoginMessage/> 
      }
  </div>
  )
  
  
}



export default Booking; 
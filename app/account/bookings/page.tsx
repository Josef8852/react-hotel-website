import BookingCard from "@/app/_components/BookingCard";


const  Page:React.FC = () => {

  const bookings = [];

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no bookings yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <BookingCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}


export default Page;
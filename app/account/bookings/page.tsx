import BookingCard from "@/app/_components/BookingCard";
import { getBookings } from "@/app/_services/apiBookings";
import auth from "@/proxy";
import { type Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Bookings",
};


const Page: React.FC = async () => {

  const session = await auth();

  const bookings = await getBookings(String(session?.user.guestId));

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no bookings yet. Check out our{" "}
          <Link className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </Link>
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
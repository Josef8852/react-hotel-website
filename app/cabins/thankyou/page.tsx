import Link from "next/link";




const Page = () =>{
  return (
    <div className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        Thank you for your reservation!
      </h1>
      <Link
        href="/account/bookings"
        className="underline text-xl text-accent-500 inline-block"
      >
        Manage your bookings &rarr;
      </Link>
    </div>
  );
}


export default Page; 
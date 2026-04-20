import { type Metadata } from "next";
import CabinList from "../_components/CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import { FilterType } from "../_components/ComponentsTypes";
import ReservationReminder from "../_components/BookingReminder";



export const metadata: Metadata = {
  title: "Cabins"
};


interface PageProps {
  searchParams : Promise<{capacity:FilterType}>
}


const Page = async ({searchParams}:PageProps) => {
  
  const filter = (await searchParams).capacity ?? "all"; 
  
  
 
   return (
     <div>
       <h1 className="text-4xl mb-5 text-accent-400 font-medium">
         Our Luxury Cabins
       </h1>
       <p className="text-primary-200 text-lg mb-10">
         Cozy yet luxurious cabins, located right in the heart of the Italian
         Dolomites. Imagine waking up to beautiful mountain views, spending your
         days exploring the dark forests around, or just relaxing in your private
         hot tub under the stars. Enjoy nature&apos;s beauty in your own little home
         away from home. The perfect spot for a peaceful, calm vacation. Welcome
         to paradise.
       </p>
       
      {/*seperate fetching data from ui -> streaming*/}
       
       <div className="flex justify-center mb-8 ">
       <Filter />  
      </div>
       
       {/*It should have a key for each filter to make the fallback work*/}
       <Suspense fallback={<Spinner />} key={filter} >
         <CabinList filter={filter} />
         <ReservationReminder/>
       </Suspense>
       
     </div>
   );
};

export default Page;

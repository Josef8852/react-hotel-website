import Booking from "@/app/_components/Booking";
import CabinInfo from "@/app/_components/CabinInfo";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_services/apiCabins";
import { type Metadata } from "next";
import { Suspense } from "react";



interface PageProps {
  params: Promise<{ cabinId: string }>
}



export const generateMetadata = async ({params} : PageProps) : Promise<Metadata> => {
  
  const { cabinId } = await params;
  
  const { name } = await getCabin(cabinId);
  
  return {
    title: `Cabin ${name}`
  }
  
} 



export const generateStaticParams = async () => {
  
  const cabins = await getCabins();
  
  const ids = cabins.map((cabin) => ({
    cabinId: String(cabin.id)
  }))
  
  
  return ids;
  
}


const Page = async ({params} : PageProps) => {
  
    const { cabinId } = await params; 
    
    const cabin = await getCabin(cabinId);
  
    const { name} = cabin;
  
    return (
      
      <div className="max-w-6xl mx-auto mt-8">
        
        <CabinInfo cabin={cabin} />
        
        <div>
          
          <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
            Book {name} today. Pay on arrival.
          </h2>
            
          <Suspense fallback={<Spinner/>} >
              <Booking cabin={cabin} />
          </Suspense>
        
        </div>
        </div>
        
    
    ); 
 
};

export default Page;
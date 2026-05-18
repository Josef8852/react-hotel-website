import auth from "@/proxy";
import { type Metadata } from "next";



export const metadata: Metadata = {
  title: "Account"
};



const Page= async () => {

  const session = await auth();
  
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome {session?.user?.name}
      </h2>
    </div>
  )
    
}


export default Page;
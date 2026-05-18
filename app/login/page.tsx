import { type Metadata } from "next";
import SignInButton from "../_components/SignInButton";



export const metadata: Metadata = {
  title: "Login"
};



const Page= () => {
  
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="font-semibold text-3xl">
        Sign in to access your guest area 
      </h2>
      <SignInButton/>
    </div>
  )
    
}


export default Page;
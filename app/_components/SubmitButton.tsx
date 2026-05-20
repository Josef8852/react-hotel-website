"use client"

import { useFormStatus } from "react-dom";
import { SubmitButtonProps } from "./ComponentsTypes";



const SubmitButton: React.FC<SubmitButtonProps> = ({children , submitLabel}) => {


   // can only be used inside a component that lives in a component that has a form :) 
  
  const { pending } = useFormStatus();

 
  
  return (
    <button disabled={pending} className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 hover:cursor-pointer ">
      {pending ? submitLabel : children}
    </button>
  )
}

export default SubmitButton; 
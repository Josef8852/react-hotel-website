"use client"

import Image from "next/image";
import { updateProfileAction } from "../_services/actions";
import { UpdateProfileFormProps } from "./ComponentsTypes";
import SubmitButton from "./SubmitButton";






const UpdateProfileForm:React.FC<UpdateProfileFormProps> = ({children , guest}) => {


  const {fullName  ,email ,nationalID , countryFlag  } = guest; 
  
  return (
    <form action={updateProfileAction} className="bg-primary-900 py-6 sm:py-8 px-4 sm:px-12 text-base sm:text-lg flex gap-6 flex-col">
      <div className="space-y-2">
        <label>Full name</label>
        <input
        defaultValue={fullName}
          disabled
          name="fullName"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
        defaultValue={email}
          disabled
             name="email"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <Image src={countryFlag} width={50} height={50} alt="countryFlag" />
        </div>

        {children}
        
        
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
        defaultValue={nationalID}
          name="nationalID"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton submitLabel="Updating...">
          Update Profile 
        </SubmitButton>
      </div>
    </form>
  )
  
  
}



export default UpdateProfileForm;
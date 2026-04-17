"use client"

import {usePathname, useRouter, useSearchParams } from "next/navigation";
import { FilterType } from "./ComponentsTypes"
import Button from "./Button";



const Filter: React.FC = () => {
  
  
  const searchParams = useSearchParams();
  
  const router = useRouter();
  
  const pathName = usePathname();
  
  const activeFilter  = searchParams.get("capacity") ?? "all";
  
  const handleFilter = (filter : FilterType): void => {
    
    const params = new URLSearchParams(searchParams);
    
    params.set("capacity", filter);
    
    router.replace(`${pathName}?${params.toString()}` , {scroll:false})
    
  }
  
  return (
    
    <div className="border border-primary-800 flex " >
      <Button
        handleFilter={() => handleFilter("all")} filter="all" activeFilter={activeFilter} >All cabins</Button>
      <Button
        handleFilter={() => handleFilter("small")}  filter="small" activeFilter={activeFilter}>1 &mdash; 3 Guests</Button>
      <Button
        handleFilter={() => handleFilter("medium")}  filter="medium" activeFilter={activeFilter} >4 &mdash; 7 Guests</Button>
      <Button 
        handleFilter={() => handleFilter("large")}  filter="large" activeFilter={activeFilter}>8 and more Guests</Button>
      
    </div>
    
  )
  
  
  
}



export default Filter; 
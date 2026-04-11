"use client"

import { FilterType } from "./types";



const Filter: React.FC = () => {
  
  
  const handleFilter = (filter : FilterType): void => {
    
  }
  
  return (
    
    <div className="border border-primary-800 flex " >
      <button
        onClick={() => handleFilter("all")}
        className="px-5 py-2  hover:bg-primary-700 hover:cursor-pointer " >All cabins</button>
      <button
        onClick={() => handleFilter("small")}
        className="px-5 py-2  hover:bg-primary-700 hover:cursor-pointer" >1 &mdash; 3 Guests</button>
      <button
        onClick={() => handleFilter("medium")}
        className="px-5 py-2  hover:bg-primary-700 hover:cursor-pointer" >4 &mdash; 7 Guests</button>
      <button o
        nClick={() => handleFilter("large")}
        className="px-5 py-2  hover:bg-primary-700 hover:cursor-pointer" >8 and more Guests</button>
      
    </div>
    
  )
  
  
  
}



export default Filter; 
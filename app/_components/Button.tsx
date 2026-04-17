import { FilterType } from "./ComponentsTypes";



interface ButtonProps {
  children: React.ReactNode; 
  filter: FilterType; 
  activeFilter: string; 
  handleFilter: (filter: FilterType) => void; 
}



const Button: React.FC<ButtonProps> = ({children , filter , activeFilter , handleFilter}) => {
  
  return (
    <>
    <button
        onClick={() => handleFilter("all")}
        className={`px-5 py-2  hover:bg-primary-700 hover:cursor-pointer 
          ${filter === activeFilter ? "bg-primary-700" : ""}  `} >{children}</button>
    </>
  )
  
  
} 


export default Button; 
import { getCabins } from "../_services/apiCabins"
import CabinCard from "./CabinCard"
import { Cabin } from "./ComponentsTypes";
import { FilterType } from "./types";


interface CabinListProps {
  filter : FilterType
}


const filterMap = {
  all: (cabins: Cabin[]) => cabins,
  small: (cabins: Cabin[]) => cabins.filter(cabin => cabin.maxCapacity <= 3),
  medium: (cabins: Cabin[]) => cabins.filter(cabin => cabin.maxCapacity > 3 && cabin.maxCapacity < 8),
  large: (cabins: Cabin[]) => cabins.filter(cabin => cabin.maxCapacity >= 8),
};

const CabinList: React.FC<CabinListProps> = async ({filter}) => {
  
  const cabins = await getCabins(); 
  
  if (!cabins) return null; 
  
  const displayedCabins = filterMap[filter](cabins);
  
  
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  )
  
  
}


export default CabinList;
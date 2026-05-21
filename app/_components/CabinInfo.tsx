import { UsersIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { CabinInfoProps } from "./ComponentsTypes";




const CabinInfo: React.FC<CabinInfoProps> = ({ cabin }) => {
  
  
  const {name, image , description , maxCapacity } = cabin; 
  
  return (

    <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-8 md:gap-20 border border-primary-800 py-3 px-4 sm:px-10 mb-10 md:mb-24">
      <div className="relative h-64 sm:h-80 md:h-full md:scale-[1.15] md:-translate-x-3">
        <Image
          fill
          className="object-cover"
          src={image}
          alt={`Cabin ${name}`} />
      </div>

      <div>
        <h3 className="text-accent-100 font-black text-4xl sm:text-5xl md:text-7xl mb-5 bg-primary-950 p-4 sm:p-6 pb-1">
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">{description}</p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span>{" "}
              guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
      </div>

  )
  
}


export default CabinInfo ; 
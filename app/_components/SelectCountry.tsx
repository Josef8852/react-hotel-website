import { getCountries } from "../_services/apiCountries";
import { Country, SelectCountryProps } from "./ComponentsTypes";



const SelectCountry: React.FC<SelectCountryProps> = async ({ defaultCountry, name, id, className }) => {
  
  
  const countries : Array<Country> = await getCountries();
  
  
  
  const flag = countries.find((country) => country.name === defaultCountry)?.flag ?? '';

  return (
    <select
      name={name}
      id={id}
     
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value=''>Select country...</option>
      {countries.map((country) => (
        <option key={country.name} value={`${country.name}%${country.flag}`}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
import { formatDistance, parseISO } from "date-fns";



export const formatDistanceFromNow = (dateStr : string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace('about ', '');


export const isValidNationalID = (nationalID: string) => {

  return /[a-zA-Z0-9]{6,12}$/.test(nationalID); 
  
}
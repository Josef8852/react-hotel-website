import { supabase } from "./supabase";

export interface Guest {
  id: number;
  fullName: string; 
  email: string; 
  nationality: string; 
  country: string;
  countryFlag: string; 
  nationalID: string; 
}

export const getGuest = async (email : string) : Promise<Guest | null> => {
  const { data , error  } = await supabase
    .from('guests')
    .select('*')
    .eq('email', email)
    .single();


  if (error) return null; 

  return data;
}


export const createGuest = async (newGuest : Partial<Guest>) : Promise<Partial<Guest>> => {
  const { data, error } = await supabase.from('guests').insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error('Guest could not be created');
  }

  if (!data) throw new Error("Guest created but no data found");

  return data;
  
}



export const updateGuest =  async (id:number, updatedFields : Partial<Guest>) : Promise<Partial<Guest>> => {
  const { data, error } = await supabase
    .from('guests')
    .update(updatedFields)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Guest could not be updated');
  }
  return data;
}
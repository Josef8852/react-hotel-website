import { supabase } from "./supabase";




export const getGuest = async (email : string) => {
  const { data, error } = await supabase
    .from('guests')
    .select('*')
    .eq('email', email)
    .single();


  return data;
}


export const createGuest = async (newGuest) => {
  const { data, error } = await supabase.from('guests').insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error('Guest could not be created');
  }

  return data;
}



export const updateGuest =  async (id:number, updatedFields)  => {
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
import { notFound } from "next/navigation";
import { supabase } from "./supabase";
import { Cabin } from "../_components/ComponentsTypes";


export const getCabin = async (id:string) => {
  const { data, error } = await supabase
    .from('cabins')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    notFound();
  }

  return data;
}

export const  getCabinPrice = async (id:string) =>  {
  const { data, error } = await supabase
    .from('cabins')
    .select('regularPrice, discount')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

export const getCabins = async () : Promise<Cabin[]> =>  {
  const { data, error } = await supabase
    .from('cabins')
    .select('id, name, maxCapacity, regularPrice, discount, image ,description')
    .order('name');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
};
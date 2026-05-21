// server actions
"use server";

import { revalidatePath } from "next/cache";
import { isValidNationalID } from "../_utils/helpers";
import { Guest, updateGuest } from "./apiGuest";
import { auth, signIn, signOut } from "./auth";
import { createBooking, deleteBooking, getBookings, updateBooking } from "./apiBookings";
import { Booking } from "../_components/ComponentsTypes";
import { redirect } from "next/navigation";


export const signInAction = async () => {

  await signIn("google", {
    redirectTo:"/account"
 });
}

export const signOutAction = async () => {

  await signOut({redirectTo:"/"});

}


export const updateProfileAction = async (formData: FormData) => {

  const session = await auth();

  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID") as string;

  const [nationality, countryFlag] = (formData.get("nationality") as string).split('%'); 


  if (!isValidNationalID(nationalID)) {
    throw new Error("Please provide a valid national ID"); 
  }

  const updateFields : Partial<Guest> = {
    nationalID , 
    nationality, 
    countryFlag
  }

  const guestId  : number = session.user.guestId;
  
  await updateGuest(guestId, updateFields);

  revalidatePath("/account/profile");
  
}


export const deleteBookingAction = async (bookingId:string) => {

  const session = await auth();

  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(String(session.user.guestId));

  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId)) throw new Error("You are not allowed to delete this booking"); 

  await deleteBooking(bookingId);

  revalidatePath("/account/booking");
  
}


export const updateBookingAction = async (formData : FormData) => {

  const session = await auth();

  if (!session) throw new Error("You must be logged in");

  const numGuests = formData.get("numGuests") as string; 

  const observations = formData.get("observations")?.slice(0,1000) as string; 

  const bookingId = Number(formData.get("bookingId")); 

  const updateFields: Partial<Booking> = {
    numGuests : Number(numGuests), 
    observations
  }


  const guestBookings = await getBookings(String(session.user.guestId));

  const guestBookingIds = guestBookings.map((booking) => Number(booking.id));

  if (!guestBookingIds.includes(bookingId)) throw new Error("You are not allowed to delete this booking"); 

  await updateBooking(String(bookingId), updateFields); 


  revalidatePath("/account/bookings");

  revalidatePath(`/account/bookings/edit/${String(bookingId)}`);
  
  redirect("/account/bookings"); 
  
}


export const createBookingAction = async (bookingData: Partial<Booking>, formData: FormData) => {
  
    const session = await auth();

    if (!session) throw new Error("You must be logged in");

    const numGuests = formData.get("numGuests") as string; 

    const observations = formData.get("observations")?.slice(0,1000) as string; 

    const newBooking: Partial<Booking> = {
    ...bookingData, 
    observations, 
    numGuests: Number(numGuests), 
    guestID: session.user.guestId, 
    extrasPrice: 0, 
    totalPrice : bookingData.cabinPrice! ,
    isPaid: false, 
    hasBreakfast: false, 
    status : "unconfirmed" , 
  }


    await createBooking(newBooking);


   revalidatePath(`/cabins/${bookingData.cabinID}`);

   redirect("/cabins/thankyou");
  
}
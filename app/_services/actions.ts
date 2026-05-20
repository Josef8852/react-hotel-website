// server actions
"use server";

import { revalidatePath } from "next/cache";
import { isValidNationalID } from "../_utils/helpers";
import { Guest, updateGuest } from "./apiGuest";
import { auth, signIn, signOut } from "./auth";
import { deleteBooking, getBookings } from "./apiBookings";


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
  
  updateGuest(guestId, updateFields);

  revalidatePath("/account/profile");
  
}


export const deleteBookingAction = async (bookingId:string) => {

  const session = await auth();

  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(String(session.user.guestId));

  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId)) throw new Error("You are not allowed to delete this booking"); 

  deleteBooking(bookingId);

  revalidatePath("/account/booking");
  
}
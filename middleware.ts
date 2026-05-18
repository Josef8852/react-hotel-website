import { auth } from "@/app/_services/auth"


export const middleware = auth;


export const config = {

  matcher : ["/account"],
  // only for account
}
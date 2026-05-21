import Link from "next/link";
import { auth } from "../_services/auth";
import Image from "next/image";
import MobileNavMenu from "./MobileNavMenu";




const Navigation: React.FC = async () => {


  const session = await auth();


  return (
    <nav className="z-100 text-xl relative">
      {/* Desktop nav */}
      <ul className="hidden md:flex gap-8 lg:gap-16 items-center">
        <li>
          <Link href="/cabins" className="hover:text-accent-400 transition-colors">
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-400 transition-colors">
            About
          </Link>
        </li>
        <li>
          {
            session?.user?.image ? (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors flex items-center gap-4"
              >
                <Image src={session.user.image}
                  alt="user"
                  className="h-8 rounded-full"
                  referrerPolicy="no-referrer"
                  width={30}
                  height={30} />
                Guest area
              </Link>
            ) : (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors"
              >
                Guest area
              </Link>
            )
          }
        </li>
      </ul>

      {/* Mobile hamburger menu */}
      <MobileNavMenu
        isLoggedIn={!!session?.user}
        userImage={session?.user?.image}
        userName={session?.user?.name}
      />
    </nav>
  );
 }


export default Navigation;
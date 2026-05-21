"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MobileNavMenuProps } from "./ComponentsTypes";



const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ isLoggedIn, userImage, userName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">

      {/* Hamburger / Close button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-60 p-2 text-primary-200 hover:text-accent-400 transition-colors"
        aria-label="Toggle menu"
      >
        {/* Bars icon — fades out when open */}
        <Bars3Icon
          className={`h-7 w-7 absolute inset-2 transition-all duration-300 ${
            isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
          }`}
        />
        {/* X icon — fades in when open */}
        <XMarkIcon
          className={`h-7 w-7 transition-all duration-300 ${
            isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
          }`}
        />
      </button>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-50 bg-primary-950 flex flex-col items-center justify-center
          transition-all duration-400 ease-in-out
          ${isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-8 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col items-center gap-10 text-3xl font-semibold">
      
          <li>
            <Link
              href="/account"
              onClick={() => setIsOpen(false)}
              className="text-primary-100 hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              {isLoggedIn && userImage ? (
                <Image
                  src={userImage}
                  alt={userName ?? "user"}
                  className="rounded-full"
                  referrerPolicy="no-referrer"
                  width={36}
                  height={36}
                />
              ) : null}
              Guest area
            </Link>
          </li>

          <li>
            <Link
              href="/cabins"
              onClick={() => setIsOpen(false)}
              className="text-primary-100 hover:text-accent-400 transition-colors"
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-primary-100 hover:text-accent-400 transition-colors"
            >
              About
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default MobileNavMenu;

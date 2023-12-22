import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  return (
    <div className="w-full text-gray-700 bg-[#ff6800] fixed top-0 z-20">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <Link
            href="/1"
            className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-whit"
          >
            <Image
              src="https://suitmedia.com/_nuxt/img/logo-white.081d3ce.png"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
        <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row text-white font-normal">
          <Link
            className="px-4 py-2 text-sm tracking-widest bg-transparent rounded-lg"
            href="#"
          >
            Work
          </Link>
          <Link
            className="px-4 py-2 text-sm tracking-widest bg-transparent rounded-lg"
            href="#"
          >
            About
          </Link>
          <Link
            className="px-4 py-2  text-sm tracking-widest bg-transparent rounded-lg "
            href="#"
          >
            Services
          </Link>
          <Link
            className="px-4 py-2  text-sm tracking-widest bg-transparent rounded-lg "
            href="#"
          >
            Ideas
          </Link>
          <Link
            className="px-4 py-2  text-sm tracking-widest bg-transparent rounded-lg "
            href="#"
          >
            Careers
          </Link>
          <Link
            className="px-4 py-2 text-sm tracking-widest bg-transparent rounded-lg "
            href="#"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

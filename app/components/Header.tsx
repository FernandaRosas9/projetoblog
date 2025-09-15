"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#807CE4] opacity-75 shadow-sm shadow-[#726AAF] hover:opacity-100">
      <nav className="container shadow-[#9BBFA4] mx-auto px-4 py-1 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <ul className="opacity-100 flex space-x-6">
          <li>
            <Link
              href="/"
              className="hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-white transition-colors font-medium"
            >
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

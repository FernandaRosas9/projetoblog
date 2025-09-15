"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type HeaderProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export default function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  return (
    <header className="bg-[#807CE4] opacity-75 shadow-sm shadow-[#726AAF] hover:opacity-100">
      <nav className="container shadow-[#9BBFA4] mx-auto px-4 py-1 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Barra de Busca */}
        <div className="w-full md:w-96">
          <input
            type="text"
            placeholder="Buscar posts por título, autor ou resumo..."
            className="bg-white w-full m-1 px-5 py-1 text-md border-2 border-white rounded-full shadow-sm focus:outline-none focus:border-indigo-500 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* Links de navegação */}
        <ul className="opacity-100 flex space-x-6">
          <li>
            <Link
              href="/"
              className=" hover:text-indigo-600 transition-colors font-medium"
            >
              Home
            </Link>
            </li>
            <li>

            <Link
              href="/about"
              className="hover:text-indigo-600 transition-colors font-medium"
            >
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

"use client";

import { useState } from "react";
import { UserIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-6">
      <div
        className="max-w-7xl mx-auto flex items-center justify-between
        bg-[rgba(255,255,255,0.06)] backdrop-blur-md border border-white/10
        shadow-md rounded-xl px-4 py-3 text-white"
      >
        {/* Left: Logo */}
        <Link href="/">
          <img src="/logo.png" alt="logo" width={32} height={32} />
        </Link>

        {/* Middle: Desktop Nav Links */}
        <ul className="hidden md:flex gap-12 text-25 font-medium">
          <li>
            <Link href="/#projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="hover:underline">
              Experience
            </Link>
          </li>
          <li>
            <Link href="/#about" className="hover:underline">
              About me
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Icon (mobile only) */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden mt-3 max-w-7xl mx-auto
          bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-white/10
          rounded-xl px-6 py-4 flex flex-col gap-4 text-base font-medium text-white"
        >
          <Link href="/#projects" onClick={closeMenu}>
            Projects
          </Link>
          <Link href="/#experience" onClick={closeMenu}>
            Experience
          </Link>
          <Link href="/#about" onClick={closeMenu}>
            About me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

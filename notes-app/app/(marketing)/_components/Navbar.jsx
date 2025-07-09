"use client";

import { useState } from "react";
import Image from "next/image";

import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="z-50 bg-white fixed top-0 flex items-center w-full p-6 border-b border-black ">
        <div className="text-xl font-semibold">CodeQuiz.</div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="ml-auto relative w-6 h-6"
        >
          <Image src="/icons.svg" fill alt="menu" className="object-contain" />
        </button>
      </div>

      {isOpen && (
        <div className="z-40 fixed top-[72px] right-0 w-full bg-white border-t shadow-md flex flex-col space-y-4 p-6 text-right">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/faq" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
          <Link href="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link href="/signup" onClick={() => setIsOpen(false)}>
            Signup
          </Link>
        </div>
      )}
    </>
  );
};

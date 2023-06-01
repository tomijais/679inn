"use client";

import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import CloseButton from "./CloseButton";
import Link from "next/link";

interface Link {
  label: string;
  route: string;
}

interface ButtonProps {
  links: Link[];
}

export default function NavigationButtons(props: ButtonProps) {
  const { links } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="-mr-2 flex md:hidden justify-end">
        <button
          onClick={toggleMenu}
          type="button"
          className="bg-black inline-flex items-center  p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <HamburgerButton /> : <CloseButton />}
        </button>
      </div>
      <ul
        className={`md:flex items-center ${
          !isOpen ? "hidden" : "block"
        } text-white  list-none `}
      >
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link
              href={route}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block md:inline-block px-3 py-2 rounded-md text-base font-medium"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

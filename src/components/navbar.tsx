"use client";

import React, { useState } from "react";

export const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src="logo1.jpg" className="h-8 mr-3" alt="Flowbite Logo" />
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <ul className={`md:flex space-x-8 ${isMenuOpen ? "block" : "hidden"}`}>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-700"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-700">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-700">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-700">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-700">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

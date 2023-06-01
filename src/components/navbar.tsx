import Link from "next/link";
import { useState } from "react";

interface Link {
  label: string;
  route: string;
}

interface HamburgerButtonProps {
  links: Link[];
}

export default function HamburgerButton(props: HamburgerButtonProps) {
  const { links } = props;

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center p-2 ml-3 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-label="Toggle Menu"
        onClick={() => setMenuOpen(!isMenuOpen)}
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

      <ul
        className={`text-white  list-none gap-8 flex justify-center ${
          isMenuOpen ? "block" : "hidden"
        } md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white`}
      >
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link
              href={route}
              className="hover:text-white hover:underline md:block md:w-auto"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

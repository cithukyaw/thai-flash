import { NavLink } from "react-router-dom";
import { FC, useState } from "react";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Determine the current page title based on the route
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/consonant":
        return "Consonant";
      case "/vowel":
        return "Vowel";
      default:
        return "Thai Flash";
    }
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex justify-between items-center shadow shadow-gray-200 py-2 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 cursor-pointer"
          onClick={toggleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <h1 className="text-lg font-bold absolute left-1/2 transform -translate-x-1/2">
          {getPageTitle()}
        </h1>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-10"
          onClick={closeMenu}
        ></div>
      )}

      {/* Slide Menu */}
      <div
        className={`fixed top-10 left-0 h-[calc(100%-2rem)] w-64 bg-white shadow-lg z-20 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <nav className="flex flex-col p-4 py-8">
          <NavLink
            to="/consonant"
            className={({ isActive }) =>
              "rounded-full border border-gray-400 font-bold py-2 px-4 mb-2 " +
              (isActive
                ? "bg-black text-white"
                : "bg-white hover:bg-black hover:text-white")
            }
            onClick={closeMenu}
          >
            Consonant
          </NavLink>
          <NavLink
            to="/vowel"
            className={({ isActive }) =>
              "rounded-full border border-gray-400 font-bold py-2 px-4 mb-2 " +
              (isActive
                ? "bg-black text-white"
                : "bg-white hover:bg-black hover:text-white")
            }
            onClick={closeMenu}
          >
            Vowel
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;

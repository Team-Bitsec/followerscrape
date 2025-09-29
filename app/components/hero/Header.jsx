// components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  isUserAuthenticated,
  signOutUser,
  setupAuthListener,
} from "../../utils/auth";
import { LogOut, User } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(isUserAuthenticated());
    };

    checkAuth();

    // Set up Firebase auth state listener
    const unsubscribe = setupAuthListener((user) => {
      setIsAuthenticated(!!user);
    });

    // Listen for localStorage changes (for compatibility)
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOutUser();
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 text-[18px] m-2 border-gray-300 border-double border rounded ">
      <div className="container mx-auto px-1 py-3 flex justify-between items-center cursor-pointer">
        {/* Left: Logo */}
        <div className="text-xl font-bold">
          <img
            src="/images/logo/logo-png.png"
            alt="followerscraper"
            width="170px"
            height="150px"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 ">
          <Link href="/" className="hover:text-orange-300 text-black font-bold">
            Home
          </Link>

          <Link
            href="/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-orange-300  text-black font-bold capitalize "
          >
            Pricing
          </Link>

          <Link
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-orange-300  text-black font-bold capitalize "
          >
            Contact
          </Link>

          {/*--------------

<Link href="/pricing" legacyBehavior>
  <a target="_blank" rel="noopener noreferrer" className="block hover:text-orange-300">
   Pricing
  </a>
</Link>


<Link href="/contact" legacyBehavior>
  <a target="_blank" rel="noopener noreferrer" className="block hover:text-orange-300">
Contact
  </a>
</Link>

-------------*/}
        </div>

        {/* Right side: Auth Buttons */}
        <div className="hidden md:flex space-x-3 font-bold items-center">
          {isAuthenticated ? (
            /* Authenticated user menu */
            <>
              <div className="flex items-center space-x-2 text-gray-700">
                <User className="w-5 h-5" />
                <span className="text-sm">Welcome!</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 hover:text-white hover:bg-red-500 bg-red-600 text-white font-bold capitalize px-4 py-2 rounded transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            /* Guest user buttons */
            <>
              <Link
                href="/signIn"
                className="block hover:text-white hover:bg-orange-500 bg-black text-white font-bold capitalize px-5 py-2 rounded transition-colors"
              >
                Sign In
              </Link>

              <Link
                href="/signUP"
                className="block hover:text-white hover:bg-orange-500 bg-black text-white font-bold capitalize px-5 py-2 rounded transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-center">
          <Link href="/" className="block hover:text-orange-300">
            Home
          </Link>
          <Link href="/pricing" className="block hover:text-orange-300">
            Pricing
          </Link>
          <Link href="/contact" className="block hover:text-orange-300">
            Contact
          </Link>

          {isAuthenticated ? (
            /* Mobile authenticated menu */
            <div className="space-y-2 pt-2 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 text-gray-700 py-2">
                <User className="w-4 h-4" />
                <span className="text-sm">Welcome!</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center space-x-1 mx-auto px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            /* Mobile guest menu */
            <div className="space-y-2 pt-2">
              <Link href="/signIn">
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100 cursor-pointer">
                  Sign in
                </button>
              </Link>
              &nbsp;&nbsp;
              <Link href="/signUP">
                <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-orange-300 hover:text-black cursor-pointer">
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

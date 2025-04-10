import Link from "next/link";
import { useAppContext } from "../context/Appcontext";
import { BagIcon, CartIcon } from "../assets/assets";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useClerk, UserButton } from "@clerk/nextjs";
import { BaggageClaim } from "lucide-react";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { openSignIn } = useClerk();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full md:px-5 lg:px-10 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <div className="flex items-center">
              <span className="text-3xl font-bold">
                <span className="text-orange-500">I</span>nline
                <span className="text-orange-500">C</span>art.
              </span>
            </div>
          </div>

          {/* Navigation Links - Now with better spacing and flexbox */}
          <div className="hidden lg:flex items-center justify-center flex-grow mx-10 space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-orange-500 font-medium transition-colors whitespace-nowrap"
            >
              Home
            </Link>
            <Link
              href="/all-products"
              className="text-gray-800 hover:text-orange-500 font-medium transition-colors whitespace-nowrap"
            >
              Shop
            </Link>
            <Link
              href=""
              className="text-gray-800 hover:text-orange-500 font-medium transition-colors whitespace-nowrap"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="text-gray-800 hover:text-orange-500 font-medium transition-colors whitespace-nowrap"
            >
              Contact
            </Link>
          </div>

          {/* Right Navigation - Search, Seller Dashboard & Account */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {isSeller && (
              <button
                onClick={() => router.push("/seller")}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors whitespace-nowrap"
              >
                Dashboard
              </button>
            )}
            {user ? (
              <>
                <UserButton>
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label="Cart"
                      labelIcon={<CartIcon />}
                      onClick={() => router.push("/cart")}
                    />
                  </UserButton.MenuItems>
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label="My Orders"
                      labelIcon={<BaggageClaim className="w-5 h-5" />}
                      onClick={() => router.push("/my-orders")}
                    />
                  </UserButton.MenuItems>
                </UserButton>
              </>
            ) : (
              <button
                onClick={openSignIn}
                className="flex items-center space-x-2 p-2  px-6 rounded-md hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium whitespace-nowrap">Sign In</span>
              </button>
            )}
          </div>

          {/* Tablet Navigation - Separate optimized version for md screens */}
          <div className="hidden md:flex lg:hidden items-center justify-end space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {user ? (
              <>
                <UserButton>
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label="Cart"
                      labelIcon={<CartIcon />}
                      onClick={() => router.push("/cart")}
                    />
                  </UserButton.MenuItems>
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label="My Orders"
                      labelIcon={<BaggageClaim className="w-5 h-5" />}
                      onClick={() => router.push("/my-orders")}
                    />
                  </UserButton.MenuItems>
                </UserButton>
              </>
            ) : (
              <button
                onClick={openSignIn}
                className="flex items-center space-x-2 p-2  px-6 rounded-md hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded-md whitespace-nowrap">
                  Sign In
                </span>
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-md rounded-b-lg mt-2">
            <div className="container mx-auto px-4 py-3 space-y-3">
              <Link
                href="/"
                className="block py-2 text-gray-800 hover:text-orange-500 font-medium"
              >
                Home
              </Link>
              <Link
                href="/all-products"
                className="block py-2 text-gray-800 hover:text-orange-500 font-medium"
              >
                Shop
              </Link>
              <Link
                href="/"
                className="block py-2 text-gray-800 hover:text-orange-500 font-medium"
              >
                About Us
              </Link>
              <Link
                href="/"
                className="block py-2 text-gray-800 hover:text-orange-500 font-medium"
              >
                Contact
              </Link>

              {isSeller && (
                <button
                  onClick={() => router.push("/seller")}
                  className="w-full py-2 mt-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                >
                  Dashboard
                </button>
              )}

              <div className="md:hidden flex items-center justify-between pt-3 border-t border-gray-200">
                <button className="flex items-center space-x-2 p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

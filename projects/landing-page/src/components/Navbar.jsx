import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";
import logo from "@/assets/logo.png";
import { navItems } from "@/constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleMobileDrawer = () => {
    setMobileDrawerOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700">
        <div className="container px-4 mx-auto lg:text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10" src={logo} alt="Logo" />
              <span>VirtualR</span>
            </div>
            <ul className="text-white hidden lg:flex gap-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex items-center gap-8">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              >
                Create an account
              </a>
            </div>
            <div className="lg:hidden flex">
              <button onClick={toggleMobileDrawer}>
                {" "}
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {mobileDrawerOpen && (
        <div className="fixed backdrop-blur-lg right-0 w-full p-4 flex  flex-col justify-center items-center text-center lg:hidden">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>{" "}
          <div className="flex gap-4">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Create an account
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

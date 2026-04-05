import React from "react";
import "./Header.css";

const Header = () => {
  const LOGO_URL =
    "https://png.pngtree.com/png-clipart/20190604/original/pngtree-corporate-image-logo-png-image_1026060.jpg";
  const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Cart", href: "/cart" },
  ];
  return (
    <header className="flex justify-between items-center pr-4">
      <div className="logoContainer">
        <img src={LOGO_URL} alt="Company logo" />
      </div>
      <nav>
        <ul className="flex gap-8">
        {NAV_ITEMS.map((item) => {
          return (
            <li>
              <a href={item.href}>{item.label}</a>
            </li>
          );
        })}
      </ul>

      </nav>
      
    </header>
  );
};

export default Header;

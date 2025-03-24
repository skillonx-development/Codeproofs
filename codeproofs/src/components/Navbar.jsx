import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black text-white py-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">CODEPROOFS</h1>
        
        {/* Navigation Links */}
        <ul className="flex space-x-10 text-lg">
          {["Home", "Features", "About us", "Help", "Contact", "Updates"].map((title, index) => (
            <li key={index}>
              <a
                href={`#${title.toLowerCase().replace(" ", "-")}`}
                className="hover:text-accent transition duration-300"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

const Navbar = () => {
  // Define navigation items with specific links or routes
  const navItems = [
    { title: "Home", link: "/" },
    { title: "Features", link: "/features" },
    { title: "About us", link: "/about" },
    { title: "Help", link: "/help" },
    { title: "Contact", link: "/contact" },
    { title: "Updates", link: "/updates" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-black text-white py-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">CODEPROOFS</h1>
        
        {/* Navigation Links */}
        <ul className="flex space-x-10 text-lg">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="hover:text-accent transition duration-300"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
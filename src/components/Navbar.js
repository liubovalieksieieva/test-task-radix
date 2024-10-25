import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="nav-logo">L&S</div>
      <div className="burger-icon" onClick={toggleMenu}>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#shop">Store</a>
        </li>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contacts</h4>
          <p>Kyiv, Ukraine</p>
          <p>Phone: +38 (044) 123-45-67</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>
              <a href="#support">Support</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024</p>
      </div>
    </footer>
  );
};

export default Footer;

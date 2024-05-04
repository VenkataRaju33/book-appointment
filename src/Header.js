import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img
          src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/logo.svg"
          alt="brand-logo"
        />
      </Link>
      <ul>
        <li>
          <a target="_blank" href="https://www.apollohospitals.com/contact-us/">
            About Us
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.apollohospitals.com/contact-us/">
            Contact Us
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.apollohospitals.com/privacy-policy/"
          >
            Privacy Policy
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;

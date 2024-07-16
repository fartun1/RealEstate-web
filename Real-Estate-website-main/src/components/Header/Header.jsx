import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  const handleLinkClick = (event, targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If the target element is not found, let the Link component handle the navigation
      return;
    }
  };

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <div className="blue-circle" />
        <img src="./Llogo.png" alt="logo" width={100} />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <Link
              to="/residencies"
              onClick={(event) => handleLinkClick(event, 'residencies')}
            >
              Residencies
            </Link>
            <Link
              to="/value"
              onClick={(event) => handleLinkClick(event, 'value')}
            >
              Our Value
            </Link>
            
            <Link
              to="/contact-us"
              onClick={(event) => handleLinkClick(event, 'contact-us')}
            >
              Contact Us
            </Link>
            <Link
              to="/get-started"
              onClick={(event) => handleLinkClick(event, 'get-started')}
            >
              Get Started
            </Link>
            <button className="button">
              <a href="KiroSheegRealState@gmail.com">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;

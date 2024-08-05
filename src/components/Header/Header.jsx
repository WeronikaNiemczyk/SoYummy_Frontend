// src\components\Header\Header.jsx
import { useState } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { UserLogo } from "./UserLogo";
import { ThemeToggler } from "./ThemeToggler";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/Header.css";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const user = {
    name: "User name",
    avatar: null,
  };

  return (
    <header
      className={`HeaderContainer ${isMobileMenuOpen ? "mobile-open" : ""}`}
    >
      <Logo />
      <nav className="HeaderNavigation">
        <Navigation />
      </nav>
      <div className="HeaderRightContainer">
        <UserLogo user={user} />
        <div className="HeaderNavigation">
          <ThemeToggler />
        </div>
        <button className="HeaderHamburger" onClick={toggleMobileMenu}>
          <svg>
            <use xlinkHref={`${symbolDefs}#icon-hamburger`} />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="HeaderMobileMenu">
          <div className="HeaderMobileMenuTop">
            <Logo />
            <button
              className="HeaderCloseButton HeaderIconColor"
              onClick={toggleMobileMenu}
            >
              <svg>
                <use xlinkHref={`${symbolDefs}#icon-exit`} />
              </svg>
            </button>
          </div>
          <Navigation />
          <div className="HeaderMobileMenuBottom">
            <ThemeToggler />
          </div>
        </div>
      )}
    </header>
  );
};

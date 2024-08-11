// src\components\Header\Header.jsx
import { useEffect, useState } from "react";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/Header.css";
import { fetchUserData } from "../../utils/fetchUserData";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { ThemeToggler } from "./ThemeToggler";
import { UserLogo } from "./UserLogo";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        console.log("Fetched user data:", data);
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, []);

  return (
    <header
      className={`HeaderContainer ${isMobileMenuOpen ? "mobile-open" : ""}`}
    >
      <Logo />
      <nav className="HeaderNavigation">
        <Navigation />
      </nav>
      <div className="HeaderRightContainer">
        {user ? (
          <UserLogo user={user.data} />
        ) : (
          <span className="HeaderUserName">Loading...</span>
        )}
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

// src\components\Header\UserLogoModal.jsx
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { UserInfoModal } from "./UserInfoModal";
import { LogoutBtn } from "./LogoutBtn";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/Header.css";

export const UserLogoModal = ({ onClose }) => {
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
  const [isUserLogoModalOpen, setIsUserLogoModalOpen] = useState(true);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleEditProfileClick = () => {
    setIsUserInfoModalOpen(true);
    setIsUserLogoModalOpen(false);
  };

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
    setIsUserLogoModalOpen(false);
  };

  useEffect(() => {
    const handleBackgroundClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    const handleEscapePress = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleBackgroundClick);
    document.addEventListener("keydown", handleEscapePress);
    return () => {
      document.removeEventListener("mousedown", handleBackgroundClick);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  return (
    <div className="HeaderModalBackground">
      {isUserLogoModalOpen && (
        <div
          className="HeaderModalContainer HeaderModalColor HeaderModalStyle"
          ref={modalRef}
        >
          <button className="HeaderButton" onClick={handleEditProfileClick}>
            Edit profile
            <svg className="HeaderIcon">
              <use xlinkHref={`${symbolDefs}#icon-edit`} />
            </svg>
          </button>
          <button className="HeaderLogoutButton" onClick={handleLogoutClick}>
            Log out
            <svg className="HeaderIconsec">
              <use xlinkHref={`${symbolDefs}#icon-arrow-go`} />
            </svg>
          </button>
        </div>
      )}
      {isUserInfoModalOpen && (
        <UserInfoModal
          onClose={() => {
            setIsUserInfoModalOpen(false);
            setIsUserLogoModalOpen(true);
          }}
        />
      )}
      {isLogoutModalOpen && (
        <LogoutBtn
          onLogout={() => {
            onClose();
            setIsLogoutModalOpen(false);
          }}
          onClose={() => setIsLogoutModalOpen(false)}
        />
      )}
    </div>
  );
};

UserLogoModal.propTypes = {
  user: PropTypes.shape({
    avatarURL: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

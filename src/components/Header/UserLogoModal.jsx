// src\components\Header\UserLogoModal.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { UserInfoModal } from "./UserInfoModal";
import { LogoutBtn } from "./LogoutBtn";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/Header.css";

export const UserLogoModal = ({ onClose }) => {
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
  const [isUserLogoModalOpen, setIsUserLogoModalOpen] = useState(true);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsUserInfoModalOpen(true);
    setIsUserLogoModalOpen(false);
  };

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
    setIsUserLogoModalOpen(false);
  };

  return (
    <div>
      {isUserLogoModalOpen && (
        <div className="HeaderModalContainer HeaderModalColor HeaderModalStyle">
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
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

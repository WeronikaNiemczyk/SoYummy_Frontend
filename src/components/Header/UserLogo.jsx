// src\components\Header\UserLogo.jsx
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { UserLogoModal } from "./UserLogoModal";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/Header.css";

export const UserLogo = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.REACT_APP_API_BASE_URL}/users/current`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((data) => setUserData(data))
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while fetching user data. Please try again.");
      });
  }, []);

  const handleLogoClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="HeaderUserLogoContainer" onClick={handleLogoClick}>
        {userData.avatar ? (
          <img
            className="HeaderUserPhotoSmall"
            src={userData.avatar}
            alt="User"
          />
        ) : (
          <svg className="HeaderUserIconSmall">
            <use xlinkHref={`${symbolDefs}#icon-user`} />
          </svg>
        )}
        <span className="HeaderUserName">{user.name}</span>
      </div>
      {isModalOpen && (
        <UserLogoModal user={userData} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

UserLogo.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
};

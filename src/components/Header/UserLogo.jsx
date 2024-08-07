// src\components\Header\UserLogo.jsx
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { UserLogoModal } from "./UserLogoModal";
import symbolDefs from "../../images/symbol-defs.svg";
import "../../styles/Header.css";
import { fetchUserData } from "../../utils/fetchUserData";

export const UserLogo = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetchUserData();
        console.log("Fetched user data in UserInfoModal:", response);
        setUserData({
          ...response.data,
          avatarURL: `https://deploy-marek-b05855e6af89.herokuapp.com${response.data.avatarURL}`,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("An error occurred while fetching user data. Please try again.");
      }
    };

    getUserData();
  }, []);

  const handleLogoClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="HeaderUserLogoContainer" onClick={handleLogoClick}>
        {userData && userData.avatarURL ? (
          <img
            className="HeaderUserPhotoSmall"
            src={userData.avatarURL}
            alt="User"
          />
        ) : (
          <svg className="HeaderUserIconSmall">
            <use xlinkHref={`${symbolDefs}#icon-user`} />
          </svg>
        )}
        <span className="HeaderUserName">
          {userData && userData.name ? userData.name : "User Name"}
        </span>
      </div>
      {isModalOpen && (
        <UserLogoModal user={userData} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

UserLogo.propTypes = {
  user: PropTypes.shape({
    avatarURL: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

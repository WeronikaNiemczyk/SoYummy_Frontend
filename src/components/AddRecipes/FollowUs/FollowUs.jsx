// src/components/AddRecipes/FollowUs/FollowUs.jsx

import symbolDefs from "../../../images/symbol-defs.svg";
import css from "./FollowUs.module.css";

const FollowUs = () => {
  return (
    <div className={css.containerFollowUs}>
      <h2 className={css.titleFollowUs}>Follow Us</h2>
      <ul className={css.socialLinksFollowUs}>
        <li className={css.socialItemFollowUs}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css.socialLinkFollowUs}
          >
            <svg className={css.icon} aria-hidden="true">
              <use href={`${symbolDefs}#icon-facebook`}></use>
            </svg>
          </a>
        </li>
        <li className={css.socialItemFollowUs}>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css.socialLinkFollowUs}
          >
            <svg className={css.icon} aria-hidden="true">
              <use href={`${symbolDefs}#icon-twitter`}></use>
            </svg>
          </a>
        </li>
        <li className={css.socialItemFollowUs}>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css.socialLinkFollowUs}
          >
            <svg className={css.icon} aria-hidden="true">
              <use href={`${symbolDefs}#icon-instagram`}></use>
            </svg>
          </a>
        </li>
        <li className={css.socialItemFollowUs}>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css.socialLinkFollowUs}
          >
            <svg className={css.icon} aria-hidden="true">
              <use href={`${symbolDefs}#icon-youtube`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FollowUs;

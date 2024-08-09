// src/components/AddRecipes/FollowUs/FollowUs.jsx

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
            Facebook
          </a>
        </li>
        <li className={css.socialItemFollowUs}>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css.socialLinkFollowUs}
          >
            Twitter
          </a>
        </li>
        <li className={css.socialItemFollowUs}>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css.socialLinkFollowUs}
          >
            Instagram
          </a>
        </li>
        <li className={css.socialItemFollowUs}>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={css.socialLinkFollowUs}
          >
            YouTube
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FollowUs;

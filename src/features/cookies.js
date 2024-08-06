// src/features/cookies.js

const setCookie = (email, token, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  const cookieData = `${email}=${token};${expires}`;
  document.cookie = cookieData;
};

const readCookie = (email) => {
  let decodedCookie = decodeURIComponent(document.cookie);
  let splitedCookie = decodedCookie.split(";");
  for (let i = 0; i < splitedCookie.length; i++) {
    let cookie = splitedCookie[i].trim();
    if (cookie.split("=")[0] === email) {
      let token = cookie.split("=")[1];
      return token;
    }
  }
  return null; // Zwrot null jeśli ciastko nie zostało znalezione
};

export default { setCookie, readCookie };

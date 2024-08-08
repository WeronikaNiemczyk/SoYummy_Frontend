// src/features/cookies.js

const setCookie = (token, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  const cookieData = `token=${token};${expires}`;
  document.cookie = cookieData;
};

const readCookie = () => {
  let decodedCookie = decodeURIComponent(document.cookie);
  let splitedCookie = decodedCookie.split(";");
  for (let i = 0; i < splitedCookie.length; i++) {
    let cookie = splitedCookie[i].trim();
    if (cookie.split("=")[0] === "token") {
      let token = cookie.split("=")[1];
      return token;
    }
  }
  return null;
};

const eraseCookie = (name) => {
  document.cookie = `${name}=; Max-Age=0; path=/;`;
};

export default { setCookie, readCookie, eraseCookie };

/*
const setCookie = (token, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  const cookieData = `token=${token};${expires}`;
  document.cookie = cookieData;
};

const readCookie = () => {
  let decodedCookie = decodeURIComponent(document.cookie);
  let splitedCookie = decodedCookie.split(";");
  for (let i = 0; i < splitedCookie.length; i++) {
    let cookie = splitedCookie[i].trim();
    if (cookie.split("=")[0] === 'token') {
      let token = cookie.split("=")[1];
      return token;
    }
  }
  return null
};

const delCookie = () => {
  let expires = "expires=Thu, 01 Jan 1970 00:00:01 GMT";
  const cookieData = `token=;${expires}`;
  document.cookie = cookieData;
};

export default { setCookie, readCookie, delCookie };
*/

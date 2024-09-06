import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { subscribe } from "../operations/subscribe";
import {
  BtnLogOut,
  FooterMain,
  FooterWrapper,
  InputMod,
  ListNetWork,
  ListNetWorkLast,
  ListRouts,
  ListTextInf,
  MailInp,
  SocialMediaFace,
  SocialMediaInst,
  SocialMediaTwit,
  SocialMediaYout,
  StyledForm,
  Text,
  TextName,
  TextOffers,
  TextRous,
  TextSubSlet,
  WrapperFirstList,
  WrapperInp,
  WrapperInpBtn,
  WrapperLastFooter,
  WrapperName,
  WrapperRouters,
} from "./Footer.styled";

import { Logo } from "../LogoFooter/LogoFooter";
const Footer = () => {
  const notifySuccess = (message) =>
    toast.success(message, { autoClose: 3000 });
  const notifyError = (message) => toast.error(message, { autoClose: 3000 });

  const subscribeHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const { email } = form.elements;
    try {
      const result = await subscribe({ email: email.value });
      form.reset();
      if (result) notifySuccess("You have successfully subscribed!");
    } catch (error) {
      notifyError(error.message);
    }
  };
  const uppPageHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <FooterMain>
        <FooterWrapper>
          <WrapperFirstList>
            <WrapperName>
              <Logo />
              <TextName>So Yummy</TextName>
            </WrapperName>
            <ListTextInf>
              <li>
                <Text>Database of recipes that can be replenished </Text>
              </li>
              <li>
                <Text>
                  Flexible search for desired and unwanted ingredients
                </Text>
              </li>
              <li>
                <Text>Ability to add your own recipes with photos </Text>
              </li>
              <li>
                <Text>Convenient and easy to use</Text>
              </li>
            </ListTextInf>
          </WrapperFirstList>
          <WrapperRouters>
            <ListRouts>
              <li>
                <TextRous
                  to="/SoYummy_Frontend/categories/:category"
                  onClick={uppPageHandler}
                >
                  Categories
                </TextRous>
              </li>
              <li>
                <TextRous to="/SoYummy_Frontend/add" onClick={uppPageHandler}>
                  Add recipes
                </TextRous>
              </li>
              <li>
                <TextRous to="own-recipes" onClick={uppPageHandler}>
                  My recipes
                </TextRous>
              </li>
              <li>
                <TextRous
                  to="/SoYummy_Frontend/favorite"
                  onClick={uppPageHandler}
                >
                  Favorite
                </TextRous>
              </li>
              <li>
                <TextRous
                  to="/SoYummy_Frontend/shopping-list"
                  onClick={uppPageHandler}
                >
                  Shopping list
                </TextRous>
              </li>
            </ListRouts>
            <ListNetWork>
              <li>
                <a href="facebook.com">
                  <SocialMediaFace />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <SocialMediaInst />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com">
                  <SocialMediaYout />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <SocialMediaTwit />
                </a>
              </li>
            </ListNetWork>
          </WrapperRouters>
          <WrapperLastFooter>
            <TextSubSlet>Subscribe to our Newsletter</TextSubSlet>
            <TextOffers>
              Subscribe up to our newsletter. Be in touch with latest news and
              special offers, etc.
            </TextOffers>{" "}
            <WrapperInpBtn>
              <StyledForm onSubmit={subscribeHandler}>
                <WrapperInp>
                  <MailInp />
                  <InputMod
                    type="text"
                    placeholder="Enter your email address"
                    name="email"
                  />
                </WrapperInp>
                <BtnLogOut type="submit">Subscribe</BtnLogOut>
              </StyledForm>
            </WrapperInpBtn>
            <ListNetWorkLast>
              <li>
                <a href="facebook.com">
                  <SocialMediaFace />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <SocialMediaInst />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com">
                  <SocialMediaYout />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <SocialMediaTwit />
                </a>
              </li>
            </ListNetWorkLast>
          </WrapperLastFooter>
        </FooterWrapper>
        <div className="light-footer">
          <p className="light-year">© 2024 All Rights Reserved.</p>
          <p className="light-text">Terms of Service</p>
        </div>
      </FooterMain>
    </>
  );
};

export default Footer;

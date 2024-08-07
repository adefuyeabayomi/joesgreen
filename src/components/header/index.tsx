import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import Overlay from "../overlay";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faArrowAltCircleRight,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import logo from "../../assets/logo.png";
import { useAuth } from "../../navigation/AuthContext";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";

function Header(): React.JSX.Element {
  let auth = useAuth();
  const { triggerInfo, triggerError, triggerSuccess } =
    useNotificationTrigger();
  console.log("auth", auth.isAuthenticated);
  const [isOpen, setOpen] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const toggleDesktopMenu = () => {
    setShowDesktopMenu(!showDesktopMenu);
  };
  function toggleHamburger() {
    setOpen(!isOpen);
  }

  const navigate = useNavigate();

  function goToHome() {
    return navigate("/");
  }

  function goToOrders() {
    return navigate("/order");
  }

  function goToTrainings() {
    return navigate("/trainings");
  }

  function goToBlog() {
    return navigate("/blog");
  }

  function goToAbout() {
    return navigate("/about");
  }

  function goToContact() {
    navigate("/#contact");
  }

  function goToLogin() {
    navigate("/login");
  }

  function goToSignup() {
    navigate("/signup");
  }

  function goToCheckout() {
    navigate("/checkout");
  }

  function goToUserOrders() {
    navigate("/user/orders");
  }
  function goToUserAccount() {
    navigate("/user/account");
  }
  function goToUserTransactionHistory() {
    navigate("/user/transaction-history");
  }
  function goToSupport() {
    navigate("/support");
  }

  return (
    <div className="container-fluid no-space">
      <div className="row no-space align-items-center green-bg header-container">
        <div className="w-max-content">
          <div className="logo-container">
            <img className="header-logo" src={logo} />
          </div>
        </div>
        <div className="col d-none d-lg-block font-p font-light text-main">
          <div className="nav-container-desktop">
            <div className="row h-nav-container justify-content-center w-100">
              <div className="w-max-content">
                <p className="header-link no-space" onClick={goToHome}>
                  Home
                </p>
              </div>
              <div className="w-max-content">
                <p className="header-link no-space" onClick={goToOrders}>
                  Order
                </p>
              </div>
              <div className="w-max-content">
                <p className="header-link no-space" onClick={goToTrainings}>
                  Trainings
                </p>
              </div>
              <div className="w-max-content">
                <p className="header-link no-space" onClick={goToBlog}>
                  Blog
                </p>
              </div>
              <div className="w-max-content">
                <p className="header-link no-space" onClick={goToAbout}>
                  About Us
                </p>
              </div>
              <div className="w-max-content">
                <p className="header-link no-space" onClick={goToContact}>
                  Contact
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-block d-lg-none"></div>
        {auth.isAuthenticated ? (
          <div className="d-none d-sm-block w-max-content no-space pointer userButtonContainer">
            <p
              className="font-p font-regular deep-green no-space"
              onClick={toggleDesktopMenu}
            >
              <FontAwesomeIcon icon={faUser} /> {auth.email}{" "}
              {showDesktopMenu ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </p>
            {showDesktopMenu ? (
              <div className="userOptionsDesktopContainer shadow">
                <div>
                  <p className="font-p font-medium">Account Activities</p>
                  <div className="util-divider" />
                  <p
                    className="font-small font-regular pointer py-1"
                    onClick={() => {
                      toggleDesktopMenu();
                      navigate("/checkout");
                    }}
                  >
                    Checkout Page
                  </p>
                  <p
                    className="font-small font-regular pointer py-1"
                    onClick={() => {
                      toggleDesktopMenu();
                      goToUserOrders();
                    }}
                  >
                    My Orders
                  </p>
                  <p
                    className="font-small font-regular pointer py-1"
                    onClick={() => {
                      toggleDesktopMenu();
                      goToUserAccount();
                    }}
                  >
                    Account Settings
                  </p>
                  <p
                    className="font-small font-regular pointer py-1"
                    onClick={() => {
                      toggleDesktopMenu();
                      goToSupport();
                    }}
                  >
                    Support Page
                  </p>
                  <p
                    className="font-small font-regular pointer py-1"
                    onClick={() => {
                      toggleDesktopMenu();
                      triggerInfo({
                        title: "Log Out",
                        message: "You have successfully logged out",
                      });
                      auth.logout();
                    }}
                  >
                    Logout
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="d-none d-sm-block w-max-content no-space">
            <div className="row align-items-center">
              <div className="w-max-content header-login-button no-space">
                <button
                  onClick={() => {
                    goToLogin();
                  }}
                  className="pointer font-regular text-main"
                >
                  Login
                </button>
              </div>
              <div className="w-max-content button-container no-space">
                <button
                  onClick={goToSignup}
                  className="green-bg-main header-button"
                >
                  Sign Up <FontAwesomeIcon icon={faUser} />{" "}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="w-max-content d-block d-lg-none">
          <div className="nav-container-mobile">
            <Hamburger
              toggled={isOpen}
              color="#00A826"
              size={20}
              toggle={toggleHamburger}
            />
            <Overlay isOpen={isOpen} toggle={toggleHamburger}>
              <div className="py-4" />
              <div className="row no-space align-items-center px-3">
                <div className="w-max-content no-space">
                  <div className="menu-image-container text-center">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                </div>
                <div className="col no-space">
                  <p
                    style={{ lineHeight: "0.8" }}
                    className="font-p font-medium no-space wrap-text"
                  >
                    {auth.isAuthenticated ? auth.email : "Guest User"}
                  </p>
                  <small
                    style={{ lineHeight: "0.8" }}
                    className="font-mini no-space"
                  >
                    {auth.isAuthenticated ? "Logged In" : "Not Logged In"}{" "}
                  </small>
                </div>
              </div>
              <div className="mobileLinksContainer">
                <div>
                  <p className="font-p font-medium">Site Main Pages</p>
                  <p
                    className="font-small font-regular pointer"
                    onClick={() => {
                      setOpen(!isOpen);
                      goToHome();
                    }}
                  >
                    Home
                  </p>
                  <p
                    className="font-small font-regular pointer"
                    onClick={() => {
                      setOpen(!isOpen);
                      goToOrders();
                    }}
                  >
                    Order
                  </p>
                  <p
                    className="font-small font-regular pointer"
                    onClick={() => {
                      setOpen(!isOpen);
                      goToTrainings();
                    }}
                  >
                    Training
                  </p>
                  <p
                    className="font-small font-regular pointer"
                    onClick={() => {
                      setOpen(!isOpen);
                      goToAbout();
                    }}
                  >
                    About Us
                  </p>
                  <p
                    className="font-small font-regular pointer"
                    onClick={() => {
                      setOpen(!isOpen);
                      goToContact();
                    }}
                  >
                    Contact Us
                  </p>
                  <p
                    className="font-small font-regular pointer"
                    onClick={() => {
                      setOpen(!isOpen);
                      goToBlog();
                    }}
                  >
                    Blog
                  </p>
                </div>
                <div className="py-1" />
                {auth.isAuthenticated ? (
                  <div>
                    <p className="font-p font-medium">My Account</p>
                    <p
                      className="font-small font-regular pointer"
                      onClick={() => {
                        setOpen(!isOpen);
                        navigate("/checkout");
                      }}
                    >
                      Checkout Page
                    </p>
                    <p
                      className="font-small font-regular pointer"
                      onClick={() => {
                        setOpen(!isOpen);
                        goToUserOrders();
                      }}
                    >
                      My Orders
                    </p>
                    <p
                      className="font-small font-regular pointer"
                      onClick={() => {
                        setOpen(!isOpen);
                        goToUserTransactionHistory();
                      }}
                    >
                      Transactions History
                    </p>
                    <p
                      className="font-small font-regular pointer"
                      onClick={() => {
                        setOpen(!isOpen);
                        goToUserAccount();
                      }}
                    >
                      Account Settings
                    </p>
                    <p
                      className="font-small font-regular pointer"
                      onClick={() => {
                        setOpen(!isOpen);
                        goToSupport();
                      }}
                    >
                      Support Page
                    </p>
                  </div>
                ) : null}
              </div>
              {auth.isAuthenticated ? (
                <div>
                  <div className="py-3" />
                  <div className="no-space px-3">
                    <button
                      onClick={() => {
                        setOpen(!isOpen);
                        auth.logout();
                      }}
                      className="green-bg-main mobile-menu-login font-small font-regular"
                    >
                      Sign Out <FontAwesomeIcon icon={faArrowAltCircleRight} />{" "}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="py-3" />
                  <div className="no-space px-3 py-2">
                    <button
                      onClick={() => {
                        goToLogin();
                        setOpen(!isOpen);
                      }}
                      className="green-bg-main mobile-menu-login font-small font-regular"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faUser} /> Login
                    </button>
                  </div>
                  <div className="no-space px-3 py-2">
                    <button
                      onClick={() => {
                        goToSignup();
                        setOpen(!isOpen);
                      }}
                      className="mobile-menu-signin font-small font-regular"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faUser} /> Sign Up
                    </button>
                  </div>
                </div>
              )}
              <div className="py-5" />
            </Overlay>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React, { useState, useEffect } from "react";

import { animateScroll as scroll } from "react-scroll";
import call from "../../assets/image16.png";
import messageImg from "../../assets/image15.png";

import "./style.css";
import { InputMain, TextAreaMain } from "../../components/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useLoading } from "../../components/utils/loadingContext";
import { customerService } from "joegreen-service-library";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import { useAuth } from "../../navigation/AuthContext";
import { isValidEmail } from "../../functions/utils";

export default function SupportPage(): React.JSX.Element {
  let { setLoading, setLoadingText } = useLoading();
  let auth = useAuth();
  const [email, setEmail] = useState(auth.email || "");
  let { triggerError, triggerInfo, triggerSuccess } = useNotificationTrigger();
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const resetEmailError = () => {
    setEmailError(false);
  };
  const resetMessageError = () => {
    setEmailError(false);
  };

  async function sendMessage() {
    // Validate inputs
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }
    if (message.length == 0) {
      triggerInfo({ title: "Please input a message", message: "" });
      return;
    }
    // If inputs are valid, proceed with signup
    setLoading(true);
    setLoadingText("Submitting Message...");

    try {
      const response = await customerService.postCustomerMessage(
        email,
        message,
      );
      triggerInfo({
        title: "Message Recieved",
        message:
          "Dear User, We would respond to your message as soon as possible. Thank you.",
      });
    } catch (error) {
      triggerError({ title: "Login Error", message: error.message });
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  return (
    <div>
      <div className="mainSpacing">
        <div className="py-3" />
        <div className="support-page-container">
          <div className="util-header">
            <div>
              <p className="font-heading-6 font-medium green-color-main text-center">
                Support Page
              </p>
            </div>
            <div className="py-1" />
            <div className="util-divider" />
          </div>
          <div className="py-3" />
          <div className="container-fluid no-space">
            <div className="row no-space align-items-center justify-content-center">
              <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                <div className="contact-contents">
                  <div>
                    <p className="font-subtitle font-medium deep-green">
                      Contact Us
                    </p>
                  </div>

                  <div className="py-1" />
                  <div className="container-fluid no-space">
                    <div className="row no-space align-items-center">
                      <div className="w-max-content no-space">
                        <div className="SIImageContainer">
                          <img src={messageImg} />
                        </div>

                        <div className="py-2" />
                      </div>
                      <div className="col-6 no-space">
                        <div className="px-1">
                          <p className="font-subtitle font-medium no-space">
                            Email
                          </p>
                        </div>
                        <div className="px-1">
                          <p className="font-p font-regular no-space">
                            support@joegreencafe.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid no-space">
                    <div className="row no-space align-items-center">
                      <div className="w-max-content no-space">
                        <div className="SIImageContainer">
                          <img src={call} />
                        </div>
                      </div>
                      <div className="col-6 no-space">
                        <div className="px-1">
                          <p className="font-subtitle font-medium no-space">
                            Call
                          </p>
                        </div>
                        <div className="px-1">
                          <p className="font-p font-regular no-space">
                            +234 90-8374-4758
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6  col-lg-5 col-xl-4">
                <div className="py-3 py-md-0" />
                <div className="supportFormContainer">
                  <div>
                    <p className="font-subtitle font-medium">
                      Send An Instant Message (Enquires/Feedback/Complaints)
                    </p>
                  </div>
                  <div>
                    <p className="font-small font-regular">Your Email</p>
                    <InputMain
                      onFocus={resetEmailError}
                      showError={emailError}
                      errorMessage="Email is invalid"
                      icon={<FontAwesomeIcon color="#aeaeae" icon={faAt} />}
                      value={email}
                      onChange={setEmail}
                      placeholder={"Your Email"}
                    />
                  </div>
                  <div>
                    <p className="font-small font-regular">
                      Write Your Message Here
                    </p>
                    <TextAreaMain
                      onChange={setMessage}
                      value={message}
                    ></TextAreaMain>
                  </div>
                  <div className="py-1" />
                  <div>
                    <button
                      onClick={sendMessage}
                      className="support-cta-button"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3" />
      </div>
    </div>
  );
}

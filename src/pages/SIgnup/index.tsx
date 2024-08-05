import React, { useState , useEffect} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authService } from "joegreen-service-library";
import { animateScroll as scroll } from "react-scroll";
import { isValidEmail, isStringLengthGreaterThan } from "../../functions/utils";
import { InputMain } from "../../components/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { useLoading } from "../../components/utils/loadingContext";
import { useAuth } from "../../navigation/AuthContext";

import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import facebookIcon from "../../assets/icons8-facebook.svg";
import googleIcon from "../../assets/icons8-google.svg";
import xIcon from "../../assets/icons8-x.svg";

export default function Signup(): React.JSX.Element {
  const { triggerInfo, triggerError, triggerSuccess } =
    useNotificationTrigger();
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const { setLoading, setLoadingText } = useLoading();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  let proceedTo = searchParams.get("proceedTo");

  const resetEmailError = () => {
    setEmailError(false);
  };

  const resetPasswordError = () => {
    setPasswordError(false);
  };

  function goToLogin() {
    if (proceedTo) {
      navigate(`/login?proceedTo=${proceedTo}`);
    } else {
      navigate(`/login`);
    }
  }

  async function signup() {
    // Validate inputs
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }

    if (!isStringLengthGreaterThan(password, 7)) {
      setPasswordError(true);
      return;
    }

    // If inputs are valid, proceed with signup
    setLoading(true);
    setLoadingText("Signing up...");

    try {
      const response = await authService.signupWithEmailAndPassword(
        email,
        password,
      );
      triggerInfo({
        title: "Signup Success",
        message:
          "Your Sign Up is successful. You can now use the full functions of the site",
      });
      login(response.token, email);
      navigate(`/${proceedTo}` || "/");
    } catch (error) {
      triggerError({ title: "Login Error", message: error.message });
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  return (
    <div>
      <div className="mainSpacing">
        <div className="py-3" />
        <div className="container-fluid MFormContainer">
          <div className="row no-space">
            <div className="col-12 col-sm-6 no-space">
              <div className="loginFormContainer">
                <div className="py-2" />
                <h3 className="font-heading-6 text-center no-space green-color-main">
                  CREATE NEW ACCOUNT
                </h3>
                <p className="font-p no-space text-center font-regular">
                  Please input your valid credentials
                </p>
                <div className="py-2" />
                <div>
                  <InputMain
                    onFocus={resetEmailError}
                    showError={emailError}
                    errorMessage="Email is invalid"
                    icon={<FontAwesomeIcon color="#aeaeae" icon={faAt} />}
                    value={email}
                    onChange={setEmail}
                    placeholder={"UserID/Email"}
                  />
                </div>
                <div className="py-1" />
                <div>
                  <InputMain
                    onFocus={resetPasswordError}
                    type="password"
                    showError={passwordError}
                    errorMessage="Password must be at least 8 characters."
                    value={password}
                    onChange={setPassword}
                    placeholder={"Password"}
                  />
                </div>
                <div className="py-2" />
                <div className="no-space">
                  <button
                    onClick={signup}
                    className="pointer green-bg-main login-button "
                  >
                    Create Account
                  </button>
                </div>
                <div className="py-2" />
                <div className="green-divider"></div>
                <div className="py-2" />
                <div className="socialButtonContainer pointer container-fluid">
                  <div className="row no-space align-items-center">
                    <div className="w-max-content no-space">
                      <img className="sIcon" src={googleIcon} />
                    </div>
                    <div className="col px-1 font-small">
                      Signin With Google
                    </div>
                  </div>
                </div>
                <div className="socialButtonContainer pointer container-fluid">
                  <div className="row no-space align-items-center">
                    <div className="w-max-content no-space">
                      <img className="sIcon" src={facebookIcon} />
                    </div>
                    <div className="col px-1 font-small">
                      Signin With Facebook
                    </div>
                  </div>
                </div>
                <div className="socialButtonContainer pointer container-fluid">
                  <div className="row no-space align-items-center">
                    <div className="w-max-content no-space">
                      <img className="sIcon" src={xIcon} />
                    </div>
                    <div className="col px-1 font-small">Signin With Apple</div>
                  </div>
                </div>
                <div className="py-2" />
              </div>
            </div>
            <div className="formSupport col-12 col-sm-6 no-space align-items-center row">
              <div className="py-5 py-md-0" />
              <div className="py-5 py-md-0" />
              <div>
                <div className="center text-center" style={{ width: "80%" }}>
                  <h4
                    style={{ color: "white" }}
                    className="font-heading-6 text center"
                  >
                    Already have an account? Login Here!
                  </h4>
                </div>
                <div className="center">
                  <button
                    className="FSupportButton font-medium pointer"
                    onClick={goToLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="py-5 py-md-0" />
              <div className="py-5 py-md-0" />
            </div>
          </div>
        </div>
        <div className="py-3" />
      </div>
    </div>
  );
}

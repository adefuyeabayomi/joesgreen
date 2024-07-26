import React,{useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { InputMain } from "../../components/input";
import { isValidEmail } from "../../functions/utils";
import { authService } from "joegreen-service-library";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
 
import { useLoading } from "../../components/utils/loadingContext";

import './style.css' 

export default function ForgotPassword (): React.JSX.Element {  
    const {triggerInfo,triggerError,triggerSuccess} = useNotificationTrigger() 
    const navigate = useNavigate();
    const { setLoading, setLoadingText } = useLoading();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState<boolean>(false);

    function goToSupport(){
        navigate('/support')
    }
    function goToLogin(){
        navigate('/login')
    }
  
    const resetEmailError = () => {
      setEmailError(false);
    };
    async function sendForgotPassword() {
        // Validate inputs
        if (!isValidEmail(email)) {
          setEmailError(true);
          return;
        }
    
        // If inputs are valid, proceed with signup
        setLoading(true);
        setLoadingText("Sending reset link...");
    
        try {
          const response = await authService.forgotPassword(email);
          triggerInfo({title: 'Email Sent Successfully',message: 'Your password reset link has been sent. Use it to reset your password.'})
          navigate('/');
        } catch (error) {
          console.error("Error sending reset link:", error);
          triggerError({title: 'An Error Occured',message: error.message})
        } finally {
          setLoading(false);
        }
      }

    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="container-fluid MFormContainer">
                    <div className="row no-space">
                        <div className="col-12 col-sm-6 no-space">
                            <div className="loginFormContainer">
                                <div className="py-4" />
                                <h3 className="font-heading-6 text-center no-space green-color-main">PASSWORD RECOVERY</h3>
                                <p className="font-p no-space text-center font-regular">Please input the email you used to create the account. If it is in our database, a password reset email would be sent to you. Please note, the link is only valid for 30mins</p>
                                <div className="py-2" />
                                <div>
                                    <InputMain onFocus={resetEmailError} showError={emailError} errorMessage="Email is invalid" icon={<FontAwesomeIcon color="#aeaeae" icon={faAt} />} value={email} onChange={setEmail} placeholder={'UserID/Email'} />
                                </div>            
                                <div className="py-2" />
                                <div className='no-space'>
                                    <button onClick={sendForgotPassword} className='pointer green-bg-main login-button '>Send Reset Email</button>
                                </div>
                                <div className="py-2" />
                                <div>
                                    <p className="font-small text-center no-space" onClick={sendForgotPassword}><span className="font-regular pointer">I didn't get Any Mail. Resend it</span> </p>
                                </div>
                                <div className="py-2" />

                                <div className="py-5" />
                            </div>
                        </div>
                        <div className="formSupport col-12 col-sm-6 no-space align-items-center row">
                        <div className="py-5 py-md-0" />
                            <div className="py-5 py-md-0" />
                            <div>
                                <div className="center text-center" style={{width: '80%'}}>
                                    <h4 style={{color: 'white'}} className="font-heading-6 text center">For Further Assistance, Reach out to us via our support page.</h4>
                                </div>
                                <div className="center">
                                    <button className="FSupportButton font-medium pointer" onClick={goToSupport}>Go To Support Page</button>
                                </div>
                                <div className="py-1" />
                                <div className="center">
                                    <button className="FSupportButton font-medium pointer" onClick={goToLogin}>Login</button>
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
    )
}



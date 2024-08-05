import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useSearchParams } from "react-router-dom";
import { EduEnrollmentType } from "joegreen-service-library/dist/services/pingService";
import caretWhite from "../../assets/caret-white.png";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import { useLoading } from "../../components/utils/loadingContext";
import "./style.css";

import tipDots from "../../assets/tipDots.png";
import { InputMain } from "../../components/input";
import { pingService } from "joegreen-service-library";
function TrainingEnrollment(): React.JSX.Element {
  let [searchParam] = useSearchParams()
  let program = searchParam.get('program')
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  let {setLoadingText,setLoading} = useLoading()
  let {triggerInfo, triggerError} = useNotificationTrigger()

  function enroll () {
    setLoading(true)
    setLoadingText('Enrolling')
    let data: EduEnrollmentType = {
      name: fullname, email, phoneNumber: phoneNo, course: program
    }
    pingService.eduEnrollment(data).then(response=>{
      console.log(response)
      triggerInfo({title:'Enrollment Form Sent Successfully', message:'Your form has been submitted. We would reach out to you on how to complete your registrations.'})
    }).catch(err=>{
      triggerError({title:'Error In Completing Enrollment', message: err.message})
    }).finally(()=>{
      setLoading(false)
      setLoadingText('')
    })
  }
  
  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  return (
    <div id="enrollment">
      <div className="mainSpacing">
        <div className="mainVerticalSpace">
          <div className="ordersBannerContainer">
            <div
              className="ctaBannerContents py-5 px-2"
              style={{ lineHeight: 1.5 }}
            >
              <p className="font-subtitle-big d-md-none font-bold text-center">
                Fill the form with valid and correct details to register for the
                training program.
              </p>
              <p className="font-heading-6 d-none d-md-block font-bold text-center">
                Fill the form with valid and correct details to register for the
                training program.
              </p>
            </div>
          </div>
        </div>
        <div className="formContainer">
          <div>
            <div className="training-heading">
              <div className="tipContent row no-space align-items-center">
                <div className="w-max-content no-space">
                  <p className="font-p font-family-bruno delicious tipTitle">
                    Enroll
                  </p>
                </div>
                <div className="w-max-content no-space">
                  <img className="tipDots" src={tipDots} />
                </div>
              </div>
              <div className="sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium">
               {program}
              </div>
              <div className="sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium">
              {program}
              </div>
              <div className="sectionAfterTextContainer features">
                <p className="font-p text-main">
                  Enroll for the course and start a step into a new world of possibility
                </p>
              </div>
            </div>
          </div>
          <div id="form" className="font-p text-main">
            <div className="py-2" />
            <div>
              <label>Full Name: </label>
              <div className="py-1" />
              <InputMain value={fullname}  onChange={setFullName}/>
            </div>
            <div className="py-2" />
            <div>
              <label>Email: </label>
              <div className="py-1" />
              <InputMain value={email}  onChange={setEmail}/>
            </div>
            <div className="py-2" />
            <div>
              <label>Phone Number: </label>
              <div className="py-1" />
              <InputMain type="number" value={phoneNo}  onChange={setPhoneNo}/>
            </div>

            <div className="py-2" />
            <div className="py-2" />

            <div>
              <button onClick={enroll} className="enroll-button pointer">
                <div className="w-max-content center pointer row no-space align-items-center">
                  <div className="w-max-content no-space">
                    <p className="font-small tipTitle">Enroll Now</p>
                  </div>
                  <div className="w-max-content no-space">
                    <img className="caretIcon" src={caretWhite} />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-2" />
      <div className="py-2" />
      <div className="py-2" />
    </div>
  );
}

export default TrainingEnrollment;

import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { InputMain } from "../../components/input";
import "./style.css";

export default function UserAccount(): React.JSX.Element {
  
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
        <div className="accountPageContainer">
          <div className="util-header">
            <div>
              <p className="font-heading-6 font-medium green-color-main text-center">
                ACCOUNT INFORMATION
              </p>
            </div>
            <div className="py-1" />
            <div className="util-divider" />
          </div>
          <div className="py-3" />
        </div>
        <div className="accountPageContents col-12 col-sm-10 col-md-8 col-lg-6 center ">
          <div className="py-1" />
          <div>
            <p className="font-small font-regular">Phone number</p>
            <InputMain value="" onChange={() => {}} />
          </div>
          <div className="py-1" />
          <div>
            <p className="font-small font-regular">Primary Delivery Address </p>
            <InputMain value="" onChange={() => {}} />
          </div>
          <div className="py-3" />
          <div>
            <button className="support-cta-button">Update Details</button>
          </div>
        </div>
        <div className="py-3" />
      </div>
    </div>
  );
}

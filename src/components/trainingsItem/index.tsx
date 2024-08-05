import React, { useState, useRef, useEffect } from "react";

import caretWhite from "../../assets/caret-white.png";

import "./style.css";

interface HowItemPropType {
  image: string;
  title: string;
  text: string;
  price: number;
  actionFn: () => void;
  reverse: boolean;
}

function TrainingItem({
  image,
  title,
  text,
  price,
  actionFn,
  reverse,
}: HowItemPropType): React.JSX.Element {
  let ref = useRef(null);
  let TC = useRef(null);
  let TI_img = useRef(null);

  useEffect(() => {
    if (reverse) {
      ref.current.classList.add("flex-row-reverse");
      TI_img.current.classList.add("TIimg-content-left");
    } else {
      TC.current.classList.add("TItext-content-left");
    }
  }, []);

  return (
    <div className="trainingItemContainer">
      <div
        ref={ref}
        className="row no-space align-items-center justify-content-center"
      >
        <div className="col-12 col-md-6 col-lg-7 no-space">
          <div className="TIImageContainer" ref={TI_img}>
            <img src={image} />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5 no-space">
          <div className="py-2" ref={TC}>
            <div className="py-2 py-md-1" />
            <p className="no-space font-subtitle font-bold green-color-main">
              {title}
            </p>
            <div className="py-1" />
            <p className="no-space font-regular font-p font-bold deep-green-color">
              Description{" "}
            </p>
            <div className="py-0" />
            <p className="no-space font-regular font-p deep-green-color">
              {text}
            </p>
            <div className="py-1" />
            <div>
              <p className="no-space font-subtitle">N {price}</p>
            </div>
            <div className="py-2"></div>
            <button
              onClick={actionFn}
              className="ti-button-container green-bg-main"
            >
              <div className="w-max-content center pointer row no-space align-items-center">
                <div className="w-max-content no-space">
                  <p className="font-small tipTitle no-space py-2">
                    Enroll Now
                  </p>
                </div>
                <div className="w-max-content no-space">
                  <img className="caretIcon" src={caretWhite} />
                </div>
              </div>
            </button>
            <div className="py-2 py-md-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingItem;

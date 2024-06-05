import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import instagram from "../../assets/Frame 32.png"
import facebook from "../../assets/Frame 31.png"
import twitter from "../../assets/Frame 34.png"
import youtube from "../../assets/Frame 33.png"


import './style.css'

function Footer(): React.JSX.Element {
    return (
        <div id='footer'>
            <div className='mainSpacing'>
                <div className='py-1'></div>
                <div className='upperFooter'>
                    <div className='d-none'></div>
                    <div className='text-main text-center'>
                            <p className='font-p font-medium'>QUICK LINKS</p>
                        <div className='row no-space align-items-center justify-content-center flex-column flex-md-row'>
                            <p className='font-small w-max-content'>HOME</p>
                            <p className='font-small w-max-content'>ORDER</p>
                            <p className='font-small w-max-content'>TRAINING PROGRAMS</p>
                            <p className='font-small w-max-content'>ABOUT US</p>
                            <p className='font-small w-max-content'>CONTACT US</p>
                        </div>
                    </div>
                    <div className='text-center'>                        
                    <p className='font-p font-medium'>FOLLOW ON SOCIAL MEDIA</p>
                        <div className='row no-space align-items-center justify-content-center'>
                            <p className='font-small w-max-content'>INSTAGRAM <img src={instagram} className='socialIcon' /></p>
                            <p className='font-small w-max-content'>FACEBOOK <img src={facebook} className='socialIcon' /></p>
                            <p className='font-small w-max-content'>TWITTER <img src={twitter} className='socialIcon' /></p>
                            <p className='font-small w-max-content'>YOUTUBE <img src={youtube} className='socialIcon' /></p>
                        </div>
                    </div>
                    
                <div className='py-3'></div>
                </div>
            </div>    
                <div className='lowerFooter mainSpacing'>
                    <div className='text-center'>
                        <p className='font-small font-regular'>&copy;copyright of Five and Six Technologies. 2024 June.</p>
                        <p className='font-small font-regular'>Privacy Policy - Terms Of Service</p>
                    </div>
                    <div></div>
                </div>
        </div>
    )
}

export default Footer
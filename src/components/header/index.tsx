import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import { useRef } from 'react';

import "./style.css"
import logo from "../../assets/logo.png"


function Header(): React.JSX.Element {
    const navigate = useNavigate()
    const [isOpen, setOpen] = useState(false)
    const divRef = useRef(null)
    function toggleHamburger () {
        setOpen(!isOpen)
        if(!isOpen){
            divRef.current.classList.add('active')
        }
        else {
                divRef.current.classList.remove('active')
        }
    }
    function goToHome () {
        return navigate('/')
    }
    function goToOrders () {
        return navigate('/order')
    }
    function goToTrainings () {
        return navigate('/trainings')
    }
    function goToTrainingEnrollment () {
        return navigate('/training-enrollment')
    }
    function goToAbout () {
        return navigate('/about')
    }
    return (
        <div className='container-fluid no-space'>
            <div className='row no-space align-items-center header-container'>
            <div className='w-max-content'>
                <div className='logo-container'>
                    <img className='header-logo' src={logo} />
                </div>
            </div>
            <div className='col d-none d-lg-block font-p font-light c-text-main'>
                <div className='nav-container-desktop'>
                    <div className='row h-nav-container justify-content-center w-100'>
                        <div className='w-max-content'>
                            <p className='header-link' onClick={goToHome}>Home</p>
                        </div>
                        <div className='w-max-content'>
                            <p  className='header-link' onClick={goToOrders}>Order</p>
                        </div>
                        <div className='w-max-content'>
                            <p className='header-link' onClick={goToTrainings}>Trainings</p>
                        </div>
                        <div className='w-max-content'>
                            <p className='header-link' onClick={goToAbout}>About Us</p>
                        </div>
                        <div className='w-max-content'>
                            <p className='header-link' >Contact</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col d-block d-lg-none'></div>
            <div className='d-none d-sm-block w-max-content no-space'>
                <div className='button-container'>
                    <button className='header-button'>Order</button>
                </div>
            </div>
            <div className='w-max-content d-block d-lg-none'>
                <div className='nav-container-mobile'>
                    <Hamburger toggled={isOpen} color='#772424' size={25} toggle={toggleHamburger} />
                    <div ref={divRef} className={'mobile-nav-container-main'}>
                        <div className='inMenuHamContainerMain'>
                            <Hamburger toggled={isOpen} color='#ffe3e3' size={25} toggle={toggleHamburger} />
                        </div>                 
                        <div className='mobile-nav-links-container font-bold'>
                            <div className='w-max-content'>
                                <p className='mobile-link' onClick={()=>{goToHome(); toggleHamburger()}}>Home</p>
                            </div>
                            <div className='w-max-content'>
                                <p  className='mobile-link' onClick={()=>{goToOrders(); toggleHamburger()}}>Order</p>
                            </div>
                            <div className='w-max-content'>
                                <p className='mobile-link' onClick={()=>{goToTrainings(); toggleHamburger()}}>Trainings</p>
                            </div>
                            <div className='w-max-content'>
                                <p className='mobile-link' onClick={()=>{goToAbout(); toggleHamburger()}}>About Us</p>
                            </div>
                            <div className='w-max-content'>
                                <p className='mobile-link'>Contact</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header
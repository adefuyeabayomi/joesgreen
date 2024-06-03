import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';


import "./style.css"
import logo from "../../assets/logo.png"


function Header(): React.JSX.Element {
    const navigate = useNavigate()
    function goToHome () {
        return navigate('/')
    }
    function goToOrders () {
        return navigate('/orders')
    }
    function goToTrainings () {
        return navigate('/trainings')
    }
    function goToAbout () {
        return navigate('/about')
    }
    function goToContact () {
        return navigate('/contact')
    }
    return (
        <div className='container-fluid no-space'>
            <div className='row align-items-center header-container'>
            <div className='w-max-content'>
                <div className='logo-container'>
                    <img className='header-logo' src={logo} />
                </div>
            </div>
            <div className='col d-none d-lg-block order-1 font-p font-light c-text-main'>
                <div className='nav-container-desktop'>
                    <div className='row h-nav-container justify-content-center w-100'>
                        <div className='w-max-content'>
                            <p className='header-link'>Home</p>
                        </div>
                        <div className='w-max-content'>
                            <p  className='header-link'>Order</p>
                        </div>
                        <div className='w-max-content'>
                            <p className='header-link'>Trainings</p>
                        </div>
                        <div className='w-max-content'>
                            <p className='header-link'>About Us</p>
                        </div>
                        <div className='w-max-content'>
                            <p className='header-link'>Contact</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col d-block d-lg-none order-2'>
                <div className='nav-container-mobile'>
                </div>
            </div>
            <div className='w-max-content order-2'>
                <div className='button-container'>
                    <button className='header-button'>Order</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header
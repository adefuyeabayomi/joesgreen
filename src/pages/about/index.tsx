import React,{ useState,useEffect } from 'react'
import heroImage from '../../assets/trainingHero.png'
import { animateScroll as scroll } from 'react-scroll';

import './style.css'

function About(): React.JSX.Element {
    useEffect(() => {
        // Scroll to top when the component mounts
        scroll.scrollToTop({
          duration: 1000, // duration of the scrolling animation in milliseconds
          smooth: 'easeInOutQuart', // the type of easing
        });
      }, []);
    return (
        <div id='about'>
            <div className='mainSpacing'>
                <div className='about-herosection'>
                    <div className='py-4 py-lg-6'/>
                    <div className='hContainerMain container-fluid no-space'>
                        <div className='row no-space align-items-center'>
                            <div className='col-md-6 col-12 no-space'>
                                <div className='htext-container text-main'>
                                    <h1 className='no-space font-black d-md-none font-heading-6'>Best in class culinary training programs.</h1>
                                    <h1 className='no-space font-black d-none d-lg-block font-heading-3'>Best in class culinary training programs.</h1>
                                    <h1 className='no-space font-black d-none d-md-block d-lg-none font-heading-6'>Best in class culinary training programs.</h1>                                    
                                    <p className='font-p'>Welcome to Joe's Green Catering Services, where culinary excellence meets exceptional service. Indulge in our mouthwatering dishes prepared with passion and served with a smile.</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 pt-4 pt-md-0 no-space'>
                                <img className='d-block hero-image' src={heroImage} />
                            </div>
                        </div>
                    </div>  
                    <div className='py-4 py-lg-6' />
                </div>
            </div>

            <div className='mainSpacing about-section-bg'>
                <div className='about-herosection'>
                    <div className='py-4 py-lg-6'/>
                    <div className='hContainerMain container-fluid no-space'>
                        <div className='row flex-row-reverse no-space align-items-center'>
                            <div className='col-md-6 col-12 no-space TItext-content-left'>
                                <div className='htext-container text-main'>
                                    <h1 className='no-space font-black d-md-none font-heading-6'>Best in class culinary training programs.</h1>
                                    <h1 className='no-space font-black d-none d-lg-block font-heading-5'>Best in class culinary training programs.</h1>
                                    <h1 className='no-space font-black d-none d-md-block d-lg-none font-heading-6'>Best in class culinary training programs.</h1>                                    
                                    <p className='font-p'>Welcome to Joe's Green Catering Services, where culinary excellence meets exceptional service. Indulge in our mouthwatering dishes prepared with passion and served with a smile.</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 pt-4 pt-md-0 no-space'>
                                <img className='d-block hero-image' src={heroImage} />
                            </div>
                        </div>
                    </div>  
                    <div className='py-4 py-lg-6' />
                </div>
            </div>

            <div className='mainSpacing'>
                <div className='about-herosection'>
                        <div className='py-4 py-lg-6'/>
                        <div className='hContainerMain container-fluid no-space'>
                            <div className='row align-items-center'>
                                <div className='col-md-6 col-12 no-space'>
                                    <div className='htext-container text-main'>
                                        <h1 className='no-space font-black d-md-none font-heading-6'>Best in class culinary training programs.</h1>
                                        <h1 className='no-space font-black d-none d-lg-block font-heading-5'>Best in class culinary training programs.</h1>
                                        <h1 className='no-space font-black d-none d-md-block d-lg-none font-heading-6'>Best in class culinary training programs.</h1>                                    
                                        <p className='font-p'>Welcome to Joe's Green Catering Services, where culinary excellence meets exceptional service. Indulge in our mouthwatering dishes prepared with passion and served with a smile.</p>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12 pt-4 pt-md-0 no-space'>
                                    <img className='d-block hero-image' src={heroImage} />
                                </div>
                            </div>
                        </div>  
                        <div className='py-4 py-lg-6' />
                    </div>
            </div>            

            <div className='mainSpacing about-section-bg'>
                <div className='about-herosection'>
                        <div className='py-4 py-lg-6'/>
                        <div className='hContainerMain container-fluid no-space'>
                            <div className='row flex-row-reverse no-space align-items-center'>
                                <div className='col-md-6 col-12 no-space'>
                                    <div className='htext-container text-main TItext-content-left'>
                                        <h1 className='no-space font-black d-md-none font-heading-6'>Best in class culinary training programs.</h1>
                                        <h1 className='no-space font-black d-none d-lg-block font-heading-5'>Best in class culinary training programs.</h1>
                                        <h1 className='no-space font-black d-none d-md-block d-lg-none font-heading-6'>Best in class culinary training programs.</h1>                                    
                                        <p className='font-p'>Welcome to Joe's Green Catering Services, where culinary excellence meets exceptional service. Indulge in our mouthwatering dishes prepared with passion and served with a smile.</p>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12 pt-4 pt-md-0 no-space'>
                                    <img className='d-block hero-image' src={heroImage} />
                                </div>
                            </div>
                        </div>  
                        <div className='py-4 py-lg-6' />
                    </div>
            </div>

                


        </div>
    )
}

export default About
import React,{ useState } from 'react'
import heroImage from '../../assets/trainingHero.png'

import tipDots from '../../assets/tipDots.png'
import './style.css'

function Trainings(): React.JSX.Element {
    return (
        <main id='training'>
            <div className='mainSpacing'>
                <div className='training-herosection'>
                    <div className='py-2 py-lg-4'/>
                <div className='hContainerMain container-fluid no-space'>
                        <div className='row flex-column flex-sm-row no-space align-items-center'>
                            <div className='col-md-6 col-12 no-space'>
                                <div className='htext-container'>
                                    <h1 className='no-space font-black d-md-none d-lg-block font-heading-3'>Best in class culinary training programs.</h1>
                                    <h1 className='no-space font-black d-none d-md-block d-lg-none font-heading-6'>Best in class culinary training programs.</h1>
                                    
                                    <p className='font-p'>Welcome to Joe's Green Catering Services, where culinary excellence meets exceptional service. Indulge in our mouthwatering dishes prepared with passion and served with a smile.</p>
                                </div>
                            </div>
                            <div className='himagecontainer col-md-6 col-12 pt-4 pt-md-0 no-space'>
                                <img className='hero-image' src={heroImage} />
                            </div>
                        </div>
                    </div>  
                    <div className='py-2 py-lg-4' />
                </div>
                <div>
                    <div className='py-2 py-lg-4' />
                    <div className='training-heading'>
                        <div className='tipContent row no-space align-items-center'>
                            <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>Enroll</p></div>
                            <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                        </div>
                        <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'>OUR FEATURED CHOP <span className='delicious'>BELLE-FULL</span> MENU</div>
                        <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'>OUR FEATURED CHOP <span className='delicious'>BELLE-FULL</span> MENU</div>
                        <div className='sectionAfterTextContainer features'><p className='font-p text-main'>See our most sought after dishes, Order with ease and experience a new world of vibrant taste and delight.</p></div>
                    </div>
                           
                    <div className='py-2 py-lg-4' />                    
                </div>
            </div>
        </main>
    )
}

export default Trainings
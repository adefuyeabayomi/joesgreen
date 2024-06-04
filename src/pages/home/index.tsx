import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactWOW from 'react-wow'
//images
import heroImage from "../../assets/hero-img.png"
import tipDots from '../../assets/tipDots.png'
import './style.css'

function Home(): React.JSX.Element {
    return (
        <main id='home'>
            <div className='mainSpacing'>
                <div className='hero-section'>
                    <div className='hContainerMain container-fluid no-space'>
                        <div className='row flex-column flex-sm-row no-space align-items-center'>
                            <div className='col-md-6 col-12 no-space'>
                                <div className='htext-container'>
                                    <h1 className='font-black headline font-family-archivo'><span className='headline-delish'>Delicious</span> Meals That <span className='headline-delish'>Delight</span> Your Senses.</h1>
                                    <p className='font-p'>Welcome to Joe's Green Catering Services, where culinary excellence meets exceptional service. Indulge in our mouthwatering dishes prepared with passion and served with a smile.</p>
                                    <div className='py-2 py-sm-0 hbcontainer'>
                                        <button className='headlinebutton font-p'>Order Now!</button>
                                    </div>
                                </div>
                            </div>
                            <div className='himagecontainer col-md-6 col-12 pt-4 pt-md-0 no-space'>
                                <img className='hero-image' src={heroImage} />
                            </div>
                        </div>
                    </div>                    
                </div>

            </div>
            <div id='featuredDishes'>
                <div className='featuredMainContainer mainSpacing'>
                    <div className='featuredContents'>
                            <div className='tipContent row no-space align-items-center'>
                                <div className='w-max-content no-space'><p className='font-p font-family-bruno tipTitle'>DELICIOUS</p></div>
                                <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                            </div>
                            <div className='sectionHeadlineContainer text-main font-subtitle-big font-medium'>OUR FEATURED CHOP <span className='delicious'>BELLE-FULL</span> MENU</div>
                            <div className='sectionAfterTextContainer'></div>
                            <div className='otherContents'></div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            <div>

            </div>
            <div>

            </div>
        </main>
    )
}

export default Home


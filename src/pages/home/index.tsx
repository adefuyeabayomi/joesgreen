import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactWOW from 'react-wow'
//images
import heroImage from "../../assets/hero-img.png"
import './style.css'

function Home(): React.JSX.Element {
    return (
        <main id='home'>
            <div className='hero-section mainSpacing'>
                <div className='hContainerMain container-fluid no-space'>
                    <div className='row flex-column flex-sm-row no-space align-items-center'>
                        <div className='col-md-6 col-12 no-space'>
                            <div className='htext-container'>
                                <h1 className='font-black headline'><span className='headline-delish'>Delicious</span> Meals That <span className='headline-delish'>Delight</span> Your Senses.</h1>
                                <p className='font-p'>Welcome to Joe's Green Restaurant Services, where culinary excellence meets exceptional service. Indulge in our mouthwatering dishes prepared with passion and served with a smile.</p>
                                <div>
                                    <button className='headlinebutton font-p'>Order Now!</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 pt-4 pt-sm-0 no-space'>
                            <img className='hero-image' src={heroImage} />
                        </div>
                    </div>
                </div>
            </div>
            <div>

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


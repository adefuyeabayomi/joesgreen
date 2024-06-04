import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FeaturedCard from '../../components/featuredCard';
//images
import heroImage from "../../assets/hero-img.png"
import tipDots from '../../assets/tipDots.png'
import caretRight from '../../assets/caret right.png'
import image_1 from "../../assets/image1.png"
import image_2 from "../../assets/image2.png"
import image_3 from "../../assets/image3.png"
import image_4 from "../../assets/image4.png"
let image1 = <img src={image_1} />
let image2 = <img src={image_2} />
let image3 = <img src={image_3} />
let image4 = <img src={image_4} />
import './style.css'

function Home(): React.JSX.Element {
    function sily () {

    }
    return (
        <main id='home'>
            <div className='mainSpacing'>
                <div className='hero-section'>
                    <div className='hContainerMain container-fluid no-space'>
                        <div className='row flex-column flex-sm-row no-space align-items-center'>
                            <div className='col-md-6 col-12 no-space'>
                                <div className='htext-container'>
                                    <h1 className='font-black headline'><span className='headline-delish'>Delicious</span> Meals That <span className='headline-delish'>Delight</span> Your Senses.</h1>
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
                                <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>DELICIOUS</p></div>
                                <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                            </div>
                            <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'>OUR FEATURED CHOP <span className='delicious'>BELLE-FULL</span> MENU</div>
                            <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'>OUR FEATURED CHOP <span className='delicious'>BELLE-FULL</span> MENU</div>
                            <div className='sectionAfterTextContainer'><p className='font-p text-main'>See our most sought after dishes, Order with ease and experience a new world of vibrant taste and delight.</p></div>
                            <div className='featuredItemsContainer'>
                                <div className='row no-space'>
                                    <div className='col-12 col-md-6 col-lg-3 no-space'>
                                        <div className='fi-content-container firstchild center'>
                                            <FeaturedCard image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-3 no-space'>
                                        <div className='fi-content-container center'>
                                            <FeaturedCard image={image2} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-3 no-space'>
                                        <div className='fi-content-container center'>
                                            <FeaturedCard image={image3} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-3 no-space'>
                                        <div className='fi-content-container center'>
                                            <FeaturedCard image={image4} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='orderspageLinkContainer py-5'>
                                <div className='w-max-content pointer new-delight row no-space align-items-center'>
                                    <div className='w-max-content no-space'><p className='font-small font-family-bruno tipTitle'>Visit our orders page to view the menu</p></div>
                                    <div className='w-max-content no-space'><img className='caretIcon' src={caretRight} /></div>
                                </div>
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
        </main>
    )
}

export default Home


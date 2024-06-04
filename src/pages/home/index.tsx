import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FeaturedCard from '../../components/featuredCard';
import HowItem from '../../components/HowItem';
//images
import heroImage from "../../assets/hero-img.png"
import tipDots from '../../assets/tipDots.png'
import caretRight from '../../assets/caret right.png'
import caretPink from '../../assets/caret-pink.png'
import image_1 from "../../assets/image1.png"
import image_2 from "../../assets/image2.png"
import image_3 from "../../assets/image3.png"
import image_4 from "../../assets/image4.png"
import image_5 from "../../assets/image5.png"
import image_6 from "../../assets/image6.png"
import image_7 from "../../assets/image7.png"
import image_8 from "../../assets/image8.png"
let image1 = <img src={image_1} />
let image2 = <img src={image_2} />
let image3 = <img src={image_3} />
let image4 = <img src={image_4} />
let image5 = <img src={image_5} />
let image6 = <img src={image_6} />
let image7 = <img src={image_7} />
let image8 = <img src={image_8} />
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
                                <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>DISCOVER</p></div>
                                <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                            </div>
                            <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'>OUR FEATURED CHOP <span className='delicious'>BELLE-FULL</span> MENU</div>
                            <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'>OUR FEATURED CHOP <span className='delicious'>BELLE-FULL</span> MENU</div>
                            <div className='sectionAfterTextContainer features'><p className='font-p text-main'>See our most sought after dishes, Order with ease and experience a new world of vibrant taste and delight.</p></div>
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
                            <div className='py-3'></div>
                            <div className='orderspageLinkContainer'>
                                <div className='w-max-content pointer new-delight row no-space align-items-center'>
                                    <div className='w-max-content no-space'><p className='font-small font-family-bruno tipTitle'>Visit our orders page to view the menu</p></div>
                                    <div className='w-max-content no-space'><img className='caretIcon' src={caretRight} /></div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div id='howItWorks'>
                <div className='howItWorksMainContainer mainSpacing'>
                    <div className='howItWorksContents'>
                        <div className='howItWorksTextsContainer text-center'>
                            <div className='tipContent w-max-content center row no-space align-items-center'>
                                <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>CONVINIENT</p></div>
                                <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                            </div>
                            <div className='sectionHeadlineContainer d-sm-none text-main font-subtitle-big font-medium'>HOW OUR <span className='delicious'>DELIVERY SERVICE</span> WORKS</div>
                            <div className='sectionHeadlineContainer ease d-none d-sm-block text-main font-heading-5 font-medium'>HOW OUR <span className='delicious'>DELIVERY SERVICE</span> WORKS.</div>
                            <div className='sectionAfterTextContainer ease'><p className='font-p text-main'>See our most sought after dishes, Order with ease and experience a new world of vibrant taste and delight.</p></div>
                            <div>
                                <div className='row'>
                                    <div className='col-12 col-md-6 col-lg-3'>
                                        <HowItem image={image5} title='Browse through our menu' text='Check throught our menu of mouthwatering dishes and choose your pick.'></HowItem>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-3'>
                                        <HowItem image={image5} title='Browse through our menu' text='Check throught our menu of mouthwatering dishes and choose your pick.'></HowItem>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-3'>
                                        <HowItem image={image5} title='Browse through our menu' text='Check throught our menu of mouthwatering dishes and choose your pick.'></HowItem>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-3'>
                                        <HowItem image={image5} title='Browse through our menu' text='Check throught our menu of mouthwatering dishes and choose your pick.'></HowItem>
                                    </div>
                                </div>
                            </div>
                            <div className='py-4'></div>
                            <div>
                                <button className='hiw-button-container'> 
                                    <div className='w-max-content center pointer row no-space align-items-center'>
                                        <div className='w-max-content no-space'><p className='font-small font-family-bruno tipTitle'>See Our Menu</p></div>
                                        <div className='w-max-content no-space'><img className='caretIcon' src={caretPink} /></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='reviewsContainer'>
                <div className='reviewsMainContainer mainSpacing'>
                    <div className='reviewsContents'>
                        <div className='tipContent w-max-content center row no-space align-items-center'>
                            <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>CONVINIENT</p></div>
                            <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                        </div>
                        <div className='sectionHeadlineContainer d-sm-none text-main text-center font-subtitle-big font-medium'>REVIEWS FROM <span className='delicious'>OUR CUSTOMERS.</span></div>
                        <div className='sectionHeadlineContainer ease d-none d-sm-block  text-center text-main font-heading-5 font-medium'>REVIEWS FROM <span className='delicious'>OUR CUSTOMERS.</span> WORKS.</div>
                        <div className='sectionAfterTextContainer ease text-center'><p className='font-p text-main'>See our most sought after dishes, Order with ease and experience a new world of vibrant taste and delight.</p></div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </main>
    )
}

export default Home


import React,{ useState } from 'react'

import tipDots from '../../assets/tipDots.png'
import OrderItem from '../../components/orderItem'

import image_1 from '../../assets/image1.png'
let image1 = <img src={image_1} />

import './style.css'

function Order(): React.JSX.Element {
    function sily () {

    }
    return (
        <main id='orders-page' className='mainSpacing'>
            <div className='mainVerticalSpace'>
                <div className='ordersBannerContainer'>
                    <div className='ctaBannerContents py-5 px-2' style={{lineHeight: 1.5}}>
                        <p className='font-subtitle-big d-md-none font-bold text-center'>Browse through the menu, place your order!</p>
                        <p className='font-heading-6 d-none d-md-block font-bold text-center'>Browse through the menu, place your order!</p>
                    </div>
                </div>

                <div className='py-2'></div>
                <div id='section1'>
                    <div className='section-heading-contents'>
                        <div className='tipContent row no-space align-items-center'>
                            <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>MENU 1: WHITE RICE, JOLLOF, FRIED RICE</p></div>
                            <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                        </div>
                        <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'><span className='delicious'>RICE</span> SPECIALS</div>
                        <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'><span className='delicious'>RICE</span> SPECIALS</div>    
                    </div>
                    <div className='section-items-contents'>
                        <div className='row no-space gx-2'>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                        </div>
                    </div>                
                </div>

                
                <div className='py-4'></div>
                <div id='section1'>
                    <div className='section-heading-contents'>
                        <div className='tipContent row no-space align-items-center'>
                            <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>MENU 1: WHITE RICE, JOLLOF, FRIED RICE</p></div>
                            <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                        </div>
                        <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'><span className='delicious'>RICE</span> SPECIALS</div>
                        <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'><span className='delicious'>RICE</span> SPECIALS</div>    
                    </div>
                    <div className='section-items-contents'>
                        <div className='row no-space gx-2'>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                        </div>
                    </div>                
                </div>

                <div className='py-4'></div>
                <div id='section1'>
                    <div className='section-heading-contents'>
                        <div className='tipContent row no-space align-items-center'>
                            <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>MENU 1: WHITE RICE, JOLLOF, FRIED RICE</p></div>
                            <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                        </div>
                        <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'><span className='delicious'>RICE</span> SPECIALS</div>
                        <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'><span className='delicious'>RICE</span> SPECIALS</div>    
                    </div>
                    <div className='section-items-contents'>
                        <div className='row no-space gx-2'>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                        </div>
                    </div>                
                </div>


                
                <div className='py-4'></div>
                <div id='section1'>
                    <div className='section-heading-contents'>
                        <div className='tipContent row no-space align-items-center'>
                            <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>MENU 1: WHITE RICE, JOLLOF, FRIED RICE</p></div>
                            <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                        </div>
                        <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'><span className='delicious'>RICE</span> SPECIALS</div>
                        <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'><span className='delicious'>RICE</span> SPECIALS</div>    
                    </div>
                    <div className='section-items-contents'>
                        <div className='row no-space gx-2'>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                            <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                <div className='OIContainer px-1 px-md-2'>
                                    <div className='py-3'></div>
                                    <OrderItem price='4500' description='lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor' image={image1} title='Jollof Rice and Fried Rice. Spicy and Tasty.' actionFn={sily} />
                                </div>                              
                            </div>
                        </div>
                    </div>                
                </div>


            </div>
        </main>
    )
}

export default Order
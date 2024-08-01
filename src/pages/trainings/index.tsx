import React,{ useState, useEffect } from 'react'
import heroImage from '../../assets/trainingHero.png'
import { useNavigate } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll';

import TrainingItem from '../../components/trainingsItem'

import tipDots from '../../assets/tipDots.png'
import './style.css'


import image_1 from "../../assets/image1.png"
let image1 = <img src={image_1} />

function Trainings(): React.JSX.Element {
    const navigate = useNavigate();
    function goToEnroll(){
        navigate("/training-enrollment")
    }
    useEffect(() => {
        // Scroll to top when the component mounts
        scroll.scrollToTop({
          duration: 1000, // duration of the scrolling animation in milliseconds
          smooth: 'easeInOutQuart', // the type of easing
        });
      }, []);
    return (
        <main id='training'>
            <div className='mainSpacing'>
                <div className='training-herosection'>
                    <div className='py-2 py-lg-4'/>
                <div className='hContainerMain container-fluid no-space'>
                        <div className='row flex-column flex-sm-row no-space align-items-center'>
                            <div className='col-md-6 col-12 no-space'>
                                <div className='htext-container'>
                                    <h1 className='no-space font-black d-md-none d-lg-block font-heading-3 deep-green-color'>Best in class culinary training programs.</h1>
                                    <h1 className='no-space font-black d-none d-md-block d-lg-none font-heading-6 deep-green-color'>Best in class culinary training programs.</h1>                                    
                                    <p className='font-p text-main'>Welcome to Joegreen Catering Services, where culinary excellence meets exceptional service. Indulge in our mouthwatering dishes prepared with passion and served with a smile.</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 pt-4 pt-md-0 no-space'>
                                <img className='hero-image d-block' src={heroImage} />
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
                        <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'>ENROLL IN A <span className='delicious'> TRAINING PROGRAM.</span> </div>
                        <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'>ENROLL IN   A <span className='delicious'>TRAINING PROGRAM.</span> </div>
                        <div className='sectionAfterTextContainer features'><p className='font-p text-main'>See our most sought after dishes, Order with ease and experience a new world of vibrant taste and delight.</p></div>
                    </div>
                           
                    <div className='py-2 py-lg-4' />                    
                </div>
                <div>
                    <div className='py-2 py-lg-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={false} actionFn={goToEnroll} price={35000} title='HOSPITALITY/CATERING' image={image1} text='Lodging Industry, Food and beverages industry,  Catering Companies, Travel and tourism, etc'  />
                       </div>                       
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={true} actionFn={goToEnroll} price={35000} title='CULINARY ARTS' image={image1} text='Culinary skills management, professions in culinary arts, terminologies and phrases, etc'  />
                       </div>
                       
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={false} actionFn={goToEnroll} price={35000} title='PASTRY, DESERTS, PUDDING AND SNACKS' image={image1} text='ausage roll, Danish pastry, Croissant, turnover, Star Danish, Scotch egg,
Samosa, Tea scones, varieties of Shawarma, Varieties of Pizza,  family Dinner roll, Cinnamon roll, Peanut burger, Plantain mosa,
Pancakes,  Popcorn, Coconut Pufpuf, 
Yam ball, Corn dog, Short bread cookies, Chocolate cookies,
Pipe cookies, varieties of cookies, vanilla waffles, chocolate waffles, etc.
'  />
                       </div>
                       
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={true} actionFn={goToEnroll} price={35000} title='BEVERAGES AND DRINKS' image={image1} 
                            text='Varieties of tea, Plain and Greek Yoghurt, vanilla Ice cream, chocolate ice cream, strawberry ice cream, Varieties of cocktail,
Smoothies, Milo, bounvita, Ovaltine,
Custard, Tom Brown, mayonnaise, etc'  />
                       </div>     
                        <div className='py-2 py-lg-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={false} actionFn={goToEnroll} price={35000} title='BREAD BAKING AND PACKAGING' image={image1} 
                            text='Coconut bread,  ginger bread, Wheat bread, Cottage bread, commercial bread, Bread rolls, Banana bread, Burger Bread, sausage bread rolls, French bread,
Fancy bread,  Chocolate bread, dry fruits bread, agege bread, fluffy Milk bread, etc'  />
                       </div>                       
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={true} actionFn={goToEnroll} price={35000} title='CAKES' image={image1} text='Muffin cake, Marble cake, English cake,
special fruit cake, zebra cake, vanilla cake,
Honey cake, butter cake, Sponge cake, strawberry cake, Chocolate cake,Red velvet cake, Carrot cake, Coconut cake, Banana cake, Apple, dark chocolate cake, Cocoa Butter cake, etc'  />
                       </div>
                       
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={false} actionFn={goToEnroll} price={35000} title='TYPES OF ICING FOR CAKE DECORATIONS' image={image1} text='Butter Icing, Royal Icing, Fondant Icing, sugar paste, whipping cream, pureed fondant, sugar lace, glace icing, sugar sail, sugar glass, sugar sheet, etc'  />
                       </div>
                       
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={true} actionFn={goToEnroll} price={35000} title='WEDDING CAKE' image={image1} text='Cake tier, cake layers, cake board, cake pans, doweling, stacking, color meaning and combination, cake presentation, White wedding cake, traditional wedding cake, bridal shower cake, stencilling, etc. '  />
                       </div>     
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={true} actionFn={goToEnroll} price={35000} title='CAKE CRAFTS' image={image1} text='Cinderella cake decoration, Teddy bear cake, shirt cake, Face cap and Polo cake, Football stadium, aeroplane cake, vehicle cake, animals cake,  character cakes (Mickey mouse, butterfly cake, Lions guard, etc), Football pitch cake, Close and Open bible cake, Money box cake,
Makeup box cake, Bag & Shoes cake, Fruit Basket Cake, doctor and nurse jacket cake, 
Sewing Machine Cake, noodles Pot Cake, uncompleted building, chair cake, building cake, etc. '  />
                       </div>     
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={true} actionFn={goToEnroll} price={35000} title='MOLDING CRAFTS' image={image1} text='Molding of bride & groom (suit wears), Molding of bride & groom (Traditional wears), Molding of ladies shoes & hand bag, Molding of fruits, cola nut, garden eggs, beads, corn, beans,  petal sugar rose, Flowers, Orange, Coconut, Banana, Apple, Pineapple, Watermelon, cucumber, Avocado, Grape fruit, pineapple, Sun flower, Calla lily, Stephanotis, Stargazer flower,
Tiger lily, Carnation, etc'  />
                       </div>     
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={true} actionFn={goToEnroll} price={35000} title='CONTINENTAL DISHES AND AFRICAN DISHES' image={image1} text='American fried rice, Chinese fried rice,Caribbean fried rice, Nigeria fried rice, Mexican rice, Coconut fried rice, Oriented fried rice, Braised rice, Japanese fried rice
                                Italian fried rice, coconut jollof rice, Nigeria Local rice, Waco(South Africa food)
                                Mix vegetal rice, Ghanaian jollof rice, Pineapple fried rice, Carrot rice,
                                Meat rice(chicken stuffing), Jambalaya fried rice, Hungarian Beef sauce, Coconut Lamb curry, beef StroganoffChicken Casserole, Shredded Chicken Sauce, Gizzard Sauce Shredded Beef Sauce, stir fried noodles, cuscus, stir fried spaghetti, stir fried macaroni, Beef casserole sauce, Cream of Mushroom Soup, Coconut Cream Soup, Tomatoes Cream Soup, Chicken Oyster Sauce, Sweet & Sour Sauce, Chicken Maryland, Fish Barbeque, chicken Peri-Peri, Chicken Wings, Egusi Soup, White Soup, Afang Soup, Ekpan Nkukwo, Edikaikong Soup, Bitter Leaf Soup, Fisher Man Soup, Abak Atama Soup, Oha Soup, Banga Stew, Isi-Ewu, Nkwobi, ofe Owerri, Abacha, Achara Soup, Tomatoes Soup (Rivers), Banga Soup & Starch, Beneseed Soup, Groundnut Soup, Edo Black Soup, Effo Riro, Ewedu Soup & Stew, Okoho Soup (Igala and Idoma), Masa, Miyan Taushe, Awara, FURA, dankwa, kuli kuli, Tomatoes Stew, Beans Soup (Gbegiri or obo Egwa), spinach rice, Party Jolof Rice, tuwo shinkafa, catfish pepper Soup, assorted meat pepper Soup, suya, kilichi, full chicken grill, etc'  />
                       </div>    
                       <div className='py-2 py-md-4' />
                        <div className='training-content'>
                            <TrainingItem reverse={true} actionFn={goToEnroll} price={35000} title='SALAD' image={image1} text='Hasotel Salad, Russian Salad, French Salad, Warm cabbage salad, Coleslaw, Cripy spiced egg salad, Baked Vegetables, Japanese Salad, Greek Salad, Fruit Salad, full salad, average salad, Chicken Salad, etc'  />
                       </div>
                       <div className='py-2 py-md-4' />                      
                    <div className='py-2 py-lg-4' />                    
                </div>
            </div>
        </main>
    )
}

export default Trainings
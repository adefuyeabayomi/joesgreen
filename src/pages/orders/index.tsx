import React,{ useState,useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll';

import tipDots from '../../assets/tipDots.png'
import OrderItem from '../../components/orderItem'
import Overlay from '../../components/overlay';
 
import { useNavigate } from 'react-router-dom';

import image_1 from '../../assets/image1.png'
let image1 = <img style={{width: '100%'}} src={image_1} />

import './style.css'

function Order(): React.JSX.Element {
    const navigate = useNavigate()
    let [currentMeal,setCurrentMeal] = useState(
        {
            price: '',
            image: image1,
            title: '',
            description: '',
            actionFn: () => {confirmOrder('jollofRiceAndFriedRice', 'riceSpecials')},
        }
    )
    const [currentAddons,setCurrentAddons] = useState([])
    const [currentAddonsAmounts,setCurrentAddonsAmount]= useState([])
    const updateAddonCount = (name='', action='') => {
        setCurrentAddonsAmount(prevCounts => {
          // Find the addon by name
          const updatedCounts = prevCounts.map(addon => {
            if (addon.name === name) {
              // Increase or decrease the count based on the action
              return {
                ...addon,
                count: action === 'increase' ? addon.count + 1 : Math.max(addon.count - 1, 0)
              };
            }
            return addon;
          });
          return updatedCounts;
        });
      };
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [isOpen, setOpen] = useState(false)
    function toggle () {
        setOpen(!isOpen)
    }
    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
    const calculateTotalPrice = (addons) => {
        return addons.reduce((total, addon) => {
          return total + (parseFloat(addon.price) * addon.count);
        }, 0);
      };
    function confirmOrder(dish='',category=''){
        toggle();
        console.log('dish',dish,'category',category)
        let currentAddons = menu[category]['addOn']
        let currentMeal = menu[category][dish]
        let currentAddonsCount = menu[category]['addOn'].map(x=>{
            return {name: x.name,price: x.price, count: 0,increase: x.increase, decrease: x.decrease}
        })
        setCurrentMeal(currentMeal)
        setCurrentAddons(currentAddons)
        setCurrentAddonsAmount(currentAddonsCount)
    }
    useEffect(() => {
        // Scroll to top when the component mounts
        scroll.scrollToTop({
          duration: 1000, // duration of the scrolling animation in milliseconds
          smooth: 'easeInOutQuart', // the type of easing
        });
      }, []);
      const menu = {
        riceSpecials: {
          whiteRiceAndStew: {
            price: '3500',
            image: image1,
            title: 'White Rice and Stew',
            description: 'This option is for white rice and stew. It comes with one beef. You can then choose to add more beef, chicken or turkey at additional charges.',
            actionFn: () => {confirmOrder('whiteRiceAndStew', 'riceSpecials')},
          },
          jollofRiceAndFriedRice: {
            price: '4500',
            image: image1,
            title: 'Jollof and Fried Rice',
            description: 'This option is for jollof and fried rice. It comes with one beef. You can then choose to add more beef, chicken or turkey at additional charges.',
            actionFn: () => {confirmOrder('jollofRiceAndFriedRice', 'riceSpecials')},
          },
          ofadaRiceAndStew: {
            price: '5000',
            image: image1,
            title: 'Ofada Rice and Stew',
            description: 'This option is for ofada rice and stew. It comes with one beef. You can then choose to add more beef, chicken or turkey at additional charges.',
            actionFn: () => {confirmOrder('ofadaRiceAndStew', 'riceSpecials')},
          },
          addOn: [
            { name: 'Plantain', price: '500', increase: () => updateAddonCount('Plantain', 'increase'), decrease: () => updateAddonCount('Plantain', 'decrease') },
            { name: 'Chicken', price: '1000', increase: () => updateAddonCount('Chicken', 'increase'), decrease: () => updateAddonCount('Chicken', 'decrease') },
            { name: 'Beef', price: '700', increase: () => updateAddonCount('Beef', 'increase'), decrease: () => updateAddonCount('Beef', 'decrease') },
            { name: 'Turkey', price: '1200', increase: () => updateAddonCount('Turkey', 'increase'), decrease: () => updateAddonCount('Turkey', 'decrease') },
            { name: 'Beans', price: '400', increase: () => updateAddonCount('Beans', 'increase'), decrease: () => updateAddonCount('Beans', 'decrease') },
            { name: 'Coleslaw', price: '300', increase: () => updateAddonCount('Coleslaw', 'increase'), decrease: () => updateAddonCount('Coleslaw', 'decrease') },
            { name: 'Moi Moi', price: '500', increase: () => updateAddonCount('Moi Moi', 'increase'), decrease: () => updateAddonCount('Moi Moi', 'decrease') },
          ]
        },
        pastaSpecials: {
          creamyAlfredo: {
            price: '5500',
            image: image1,
            title: 'Creamy Alfredo',
            description: 'Rich and creamy Alfredo pasta with a hint of garlic and Parmesan cheese. Add chicken or shrimp at additional charges.',
            actionFn: () => {confirmOrder('creamyAlfredo', 'pastaSpecials')},
          },
          zestyMarinara: {
            price: '5200',
            image: image1,
            title: 'Zesty Marinara',
            description: 'Pasta in a zesty marinara sauce made with fresh tomatoes and herbs. Add meatballs or sausage at additional charges.',
            actionFn: () => {confirmOrder('zestyMarinara', 'pastaSpecials')},
          },
          pestoPasta: {
            price: '5400',
            image: image1,
            title: 'Pesto Pasta',
            description: 'Delicious pasta tossed in a fresh basil pesto sauce. Satiate your Craving. Add chicken or shrimp at additional charges.',
            actionFn: () => {confirmOrder('pestoPasta', 'pastaSpecials')},
          },
          addOn: [
            { name: 'Garlic Bread', price: '500', increase: () => updateAddonCount('Garlic Bread', 'increase'), decrease: () => updateAddonCount('Garlic Bread', 'decrease') },
            { name: 'Chicken', price: '1000', increase: () => updateAddonCount('Chicken', 'increase'), decrease: () => updateAddonCount('Chicken', 'decrease') },
            { name: 'Shrimp', price: '1200', increase: () => updateAddonCount('Shrimp', 'increase'), decrease: () => updateAddonCount('Shrimp', 'decrease') },
            { name: 'Extra Sauce', price: '300', increase: () => updateAddonCount('Extra Sauce', 'increase'), decrease: () => updateAddonCount('Extra Sauce', 'decrease') },
            { name: 'Parmesan Cheese', price: '200', increase: () => updateAddonCount('Parmesan Cheese', 'increase'), decrease: () => updateAddonCount('Parmesan Cheese', 'decrease') },
          ]
        },
        peppersoupVarieties: {
          spicyCatfish: {
            price: '6000',
            image: image1,
            title: 'Catfish Peppersoup',
            description: 'Hot and spicy catfish peppersoup that will warm you up. Add yam or plantain at additional charges.',
            actionFn: () => {confirmOrder('spicyCatfish', 'peppersoupVarieties')},
          },
          heartyGoatmeat: {
            price: '6200',
            image: image1,
            title: 'Goatmeat Peppersoup',
            description: 'Delicious goatmeat peppersoup, good for chilling. Add yam or plantain at additional charges.',
            actionFn: () => {confirmOrder('heartyGoatmeat', 'peppersoupVarieties')},
          },
          cowtailPeppersoup: {
            price: '6400',
            image: image1,
            title: 'Cowtail Peppersoup',
            description: 'Flavorful cowtail peppersoup with a blend of spices. Add yam or plantain at additional charges.',
            actionFn: () => {confirmOrder('cowtailPeppersoup', 'peppersoupVarieties')},
          },
          cowlegPeppersoup: {
            price: '6500',
            image: image1,
            title: 'Cowleg Peppersoup',
            description: 'Delicious cowleg peppersoup. Perfect for chilling. Enjoy with yam or plantain at added costs.',
            actionFn: () => {confirmOrder('cowlegPeppersoup', 'peppersoupVarieties')},
          },
          addOn: [
            { name: 'Yam', price: '500', increase: () => updateAddonCount('Yam', 'increase'), decrease: () => updateAddonCount('Yam', 'decrease') },
            { name: 'Plantain', price: '500', increase: () => updateAddonCount('Plantain', 'increase'), decrease: () => updateAddonCount('Plantain', 'decrease') },
            { name: 'Extra Meat', price: '1000', increase: () => updateAddonCount('Extra Meat', 'increase'), decrease: () => updateAddonCount('Extra Meat', 'decrease') },
            { name: 'Pepper Sauce', price: '300', increase: () => updateAddonCount('Pepper Sauce', 'increase'), decrease: () => updateAddonCount('Pepper Sauce', 'decrease') },
            { name: 'Fish', price: '1200', increase: () => updateAddonCount('Fish', 'increase'), decrease: () => updateAddonCount('Fish', 'decrease') },
          ]
        },
        nigerianSoups: {
          egusiSoup: {
            price: '6500',
            image: image1,
            title: 'Rich Egusi Soup',
            description: 'Traditional Nigerian Egusi soup with melon seeds, leafy greens, and assorted meats. Served with your choice of swallow.',
            actionFn: () => {confirmOrder('egusiSoup', 'nigerianSoups')},
          },
          ogbonoSoup: {
            price: '6300',
            image: image1,
            title: 'Flavorful Ogbono Soup',
            description: 'Thick and flavorful Ogbono soup made with wild mango seeds and assorted meats. Served with your choice of swallow.',
            actionFn: () => {confirmOrder('ogbonoSoup', 'nigerianSoups')},
          },
          vegetableSoup: {
            price: '6100',
            image: image1,
            title: 'Vegetable Soup',
            description: 'Healthy and delicious vegetable soup with a mix of leafy greens and assorted meats. Served with your choice of swallow.',
            actionFn: () => {confirmOrder('vegetableSoup', 'nigerianSoups')},
          },
          bangaSoup: {
            price: '6800',
            image: image1,
            title: 'Banga Soup',
            description: 'Rich and savory Banga soup made from palm nut extract, with assorted meats and fish. Served with your choice of swallow.',
            actionFn: () => {confirmOrder('bangaSoup', 'nigerianSoups')},
          },
          afangSoup: {
            price: '6700',
            image: image1,
            title: 'Afang Soup',
            description: 'Delicious Afang soup made with a blend of okazi and waterleaf, and assorted meats. Served with your choice of swallow.',
            actionFn: () => {confirmOrder('afangSoup', 'nigerianSoups')},
          },
          edikangIkongSoup: {
            price: '6900',
            image: image1,
            title: 'Edikang Ikong Soup',
            description: 'Edikang Ikong soup made with pumpkin leaves and waterleaf, with assorted meats and fish. Served with any swallow.',
            actionFn: () => {confirmOrder('edikangIkongSoup', 'nigerianSoups')},
          },
          addOn: [
            { name: 'Pounded Yam', price: '500', increase: () => updateAddonCount('Pounded Yam', 'increase'), decrease: () => updateAddonCount('Pounded Yam', 'decrease') },
            { name: 'Garri', price: '400', increase: () => updateAddonCount('Garri', 'increase'), decrease: () => updateAddonCount('Garri', 'decrease') },
            { name: 'Semovita', price: '450', increase: () => updateAddonCount('Semovita', 'increase'), decrease: () => updateAddonCount('Semovita', 'decrease') },
            { name: 'Wheat', price: '450', increase: () => updateAddonCount('Wheat', 'increase'), decrease: () => updateAddonCount('Wheat', 'decrease') },
            { name: 'Extra Meat', price: '1000', increase: () => updateAddonCount('Extra Meat', 'increase'), decrease: () => updateAddonCount('Extra Meat', 'decrease') },
            { name: 'Fish', price: '1200', increase: () => updateAddonCount('Fish', 'increase'), decrease: () => updateAddonCount('Fish', 'decrease') },
            { name: 'Snail', price: '1500', increase: () => updateAddonCount('Snail', 'increase'), decrease: () => updateAddonCount('Snail', 'decrease') },
          ]
        }
      };
      

    return (
        <main id='orders-page' className='mainSpacing'>
            <div className='mainVerticalSpace'>
                <Overlay isOpen={isOpen} toggle={toggle}>
                    <div className='co-container-main'>
                        <div className='pt-5' />
                        <div className='confirm-header text-center'>
                            <div className='sectionHeadlineContainer d-sm-none white font-subtitle-big font-medium'><span className='delicious'>CONFIRM</span> ORDER</div>
                            <div className='sectionHeadlineContainer d-none d-sm-block white font-heading-5 font-medium'><span className='delicious'>CONFIRM</span> ORDER</div>
                        </div>
                        <div className='row no-space p-3'>
                            <div className='col-12 no-space'>
                                <div className='row no-space align-items-center justify-content-center'>
                                    <div className='col-12 d-none d-lg-block col-md-6 no-space'>
                                        <div className='co-img-container'>
                                            {currentMeal.image}
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-9 col-lg-6 no-space'>
                                        <div className='confirm-contents px-md-3'>
                                            <p className='no-space font-subtitle font-bold delicious'>{currentMeal.title}</p>
                                            <div className='py-1' />
                                            <p className='no-space font-p font-medium'>Description: </p>
                                            <div className='py-1' />
                                            <p className='no-space font-p font-light'>{currentMeal.description}</p>
                                            <div className='py-1' />
                                            <p className='no-space font-p font-bold delicious'>Add to your order</p>
                                            
                                            <div className='border addOnDivide' />
                                            <div>
                                                {
                                                    currentAddonsAmounts.map(addon=>{
                                                        let {name,price,increase,decrease,count}=addon
                                                        let addOnRender = (
                                                            <div>
                                                                <div className='py-1' />
                                                                <div className='row no-space align-items-center font-p font-light'>
                                                                    <div className='col no-space'><p className='no-space'>{name} ({price})</p></div>
                                                                    <div className='w-max-content no-space order-mod'> <button className='p-1 font-bold font-subtitle' onClick={increase}>+</button> <span className='font-subtitle'>{count}</span> <button className='p-1 font-bold  font-subtitle' onClick={decrease}> - </button> </div>
                                                                </div>
                                                                <div className='border addOnDivide' />
                                                            </div>                                                            
                                                        )
                                                        return addOnRender
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-3' />
                            </div>  
                            <div className='col-12 co-divider'/>
                            <div className='col-12  no-space'>
                                        <div className='py-3' />
                                <div className='order-summary-container border-gray p-2 col-12 col-sm-10 col-md-7 col-lg-6 center'>
                                    <div className=''>                                
                                        <div className='py-1' />
                                        <p className='no-space font-subtitle white font-regular text-center'>Summary</p> 
                                                                    
                                        <div className='py-1' />
                                        <div className='row no-space'>
                                            <div className='col'>                                        
                                                <p className='no-space'>{currentMeal.title}</p> 
                                            </div>
                                            <div className='w-max-content'>
                                                <p className='no-space'>(NGN) {currentMeal.price}</p> 
                                            </div>
                                        </div>
                                        <div>
                                            {
                                                currentAddonsAmounts.map(x=>{

                                                    let summaryItem = (
                                                        <div>                        
                                                            <div className='py-2' />
                                                            <div className='row no-space'>
                                                                <div className='col'>                                        
                                                                    <p className='no-space'>{x.name} ({x.count})</p> 
                                                                </div>
                                                                <div className='w-max-content'>
                                                                    <p className='no-space'>(NGN) {x.price * x.count}</p> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                    return x.count > 0 ? summaryItem : null
                                                })
                                            }
                                        </div>                               
                                                                                                                      
                                        
                                        <div className='py-2' />
                                        <div className='row no-space font-subtitle'>
                                            <div className='col'>                                        
                                                <p className='no-space'>Total: </p> 
                                            </div>
                                            <div className='w-max-content'>
                                                <p className='no-space' style={{letterSpacing: '1px'}}> = {formatNumberWithCommas(Number(currentMeal.price) + calculateTotalPrice(currentAddonsAmounts))}</p> 
                                            </div>
                                        </div>
                                        <div className='py-2' />
                                    </div>
                                    <div className='co-button-container p-2'>
                                        <button className='font-p'>Confirm Order</button>
                                    </div>                                
                                </div>

                            </div>
                        </div>
                    </div>

                </Overlay>
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
                            {
                                Object.keys(menu.riceSpecials).map(item=>{
                                    let {price,image,title,description,actionFn} = menu.riceSpecials[item]
                                    let element = <OrderItem price={price} image={image} title={title} description={description} actionFn={actionFn} />
                                    if(item === 'addOn') return null
                                    return (
                                        <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                            <div className='OIContainer px-1 px-md-2'>
                                                <div className='py-3'></div>
                                                {element}
                                            </div>                              
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>                    
                </div>
                
                <div className='py-4'></div>

                <div id='section1'>
                    <div className='section-heading-contents'>
                        <div className='tipContent row no-space align-items-center'>
                            <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>MENU 2: CREAMY ALFREDO, ZESTY MARINARA, PESTO PASTA</p></div>
                            <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                        </div>
                        <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'><span className='delicious'>PASTA</span> SPECIALS</div>
                        <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'><span className='delicious'>PASTA</span> SPECIALS</div>    
                    </div>
                    <div className='section-items-contents'>
                        <div className='row no-space gx-2'>
                            {
                                Object.keys(menu.pastaSpecials).map(item=>{
                                    let {price,image,title,description,actionFn} = menu.pastaSpecials[item]
                                    let element = <OrderItem price={price} image={image} title={title} description={description} actionFn={actionFn} />
                                    if(item === 'addOn') return null
                                    return (
                                        <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                            <div className='OIContainer px-1 px-md-2'>
                                                <div className='py-3'></div>
                                                {element}
                                            </div>                              
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>              
                </div>

                <div className='py-4'></div>

                <div id='section1'>
                    <div className='section-heading-contents'>
                        <div className='tipContent row no-space align-items-center'>
                            <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>MENU 3: CATFISH, GOAT MEAT, COW LEG, COW TAIL PEPPERSOUP.</p></div>
                            <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                        </div>
                        <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'><span className='delicious'>PEPPERSOUP</span> SPECIALS</div>
                        <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'><span className='delicious'>PEPPERSOUP</span> SPECIALS</div>    
                    </div>
                    <div className='section-items-contents'>
                        <div className='row no-space gx-2'>
                            {
                                Object.keys(menu.peppersoupVarieties).map(item=>{
                                    let {price,image,title,description,actionFn} = menu.peppersoupVarieties[item]
                                    let element = <OrderItem price={price} image={image} title={title} description={description} actionFn={actionFn} />
                                    if(item === 'addOn') return null
                                    return (
                                        <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                            <div className='OIContainer px-1 px-md-2'>
                                                <div className='py-3'></div>
                                                {element}
                                            </div>                              
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>   

                </div>


                
                <div className='py-4'></div>
                <div id='section1'>
                    <div className='section-heading-contents'>
                        <div className='tipContent row no-space align-items-center'>
                            <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>MENU 4: NIGERIAN SOUPS AND SWALLOW</p></div>
                            <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                        </div>
                        <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'><span className='delicious'>NIGERIAN</span> SOUP SPECIALS</div>
                        <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'><span className='delicious'>NIGERIAN</span> SOUP SPECIALS</div>    
                    </div>
                    <div className='section-items-contents'>
                        <div className='row no-space gx-2'>
                            {
                                Object.keys(menu.nigerianSoups).map(item=>{
                                    let {price,image,title,description,actionFn} = menu.nigerianSoups[item]
                                    let element = <OrderItem price={price} image={image} title={title} description={description} actionFn={actionFn} />
                                    if(item === 'addOn') return null
                                    return (
                                        <div className='no-space col-12 col-md-6 col-lg-4 col-xl-3'>
                                            <div className='OIContainer px-1 px-md-2'>
                                                <div className='py-3'></div>
                                                {element}
                                            </div>                              
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>  
                </div>
            </div>
        </main>
    )
}

export default Order
import React,{ useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { CartItem } from 'joegreen-service-library/dist/services/orderService';
import './style.css'

interface COIType {
    dish: CartItem;
    onEdit?: ()=>void;
    onRemove?: (id)=>void;
    payFn?:()=>void;
}

interface FeaturedCardPropType {
    image?: string
    title: string,
    actionFn?: ()=>void,
    description?: string,
    price: string
}

function OrderItem({image,title,actionFn, description='',price}: FeaturedCardPropType): React.JSX.Element {

    return (
        <div className='text-main order-item-container-main'>
            <div className='orders-image-container'>
                <div className='oIFrame'>
                    <img src={image} />
                </div>
            </div>
            <div className=''>
                <div className='fc-title-container font-subtitle font-medium text-main'>
                    <p className='no-space'>{title}</p>
                </div>
                <div className='order-description'>
                    <p className='font-small font-regular no-space'>{description}</p>
                </div>
                <div className='py-1'></div>
                <div>
                    <p className='no-space font-subtitle font-regular'>N {price}</p>
                </div>
                <div className='py-1'></div>
                <div className='order-button-container'>
                    <button className='pointer' onClick={actionFn}>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>                
            </div>

        </div>
    )
}

export default OrderItem

export function OrderCheckOutItem({ dish, onEdit,onRemove }:COIType) {
    function getAddonText (arr) {
        let res = arr.map(addon => {
            if(addon.quantity == 0){
                return ''
            }
            return (
                `${addon.quantity} ${addon.name}, `
            )
        }).join('')
        console.log({res})
        return res;
    }
    const calculateAddonsTotalPrice = (addons) => {
        return addons.reduce((total, addon) => {
            // Check if quantity is defined; otherwise default to 0
            const quantity = addon.quantity || 0;
            return total + (addon.price * quantity);
        }, 0);
    };
    const calulateTotalOrderPrice = (dishPrice:number,addonsTotal:number,totalPlates:number) => {
        return (dishPrice + addonsTotal) * totalPlates
    }
    return (
        <div className='orderCheckOutItemContainer text-main'>
                    <div>
                        <p className='font-subtitle font-bold no-space'>{dish.quantity} Plate{dish.quantity > 0? 's':''} Of {dish.name}</p>
                    </div>
                    <div className='py-1' />
                    <div>
                        {dish.addons.length > 0 && (
                            <div>
                                <p className='font-p font-medium no-space'>Addons Incuded: </p>
                                <p className='font-small font-regular no-space'>
                                    {getAddonText(dish.addons).length == 0? 'No Addons Added' : getAddonText(dish.addons)}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className='py-1' />
                    <div>
                        <div></div>
                        <p className='font-p font-medium no-space'>Cost Summary</p>
                        
                        <div className="row no-space font-small font-regular">
                            <div className="col no-space"><p className='no-space'><span>Per Plate: </span></p></div>
                            <div className="w-max-content no-space">N {dish.price}</div>
                        </div>

                        <div className="row no-space font-small font-regular">
                            <div className="col no-space"><p className='no-space'><span>Addons Included Per Plate: </span></p></div>
                            <div className="w-max-content no-space"> N: {calculateAddonsTotalPrice(dish.addons)}</div>
                        </div>

                        <div className="row no-space font-small font-regular">
                            <div className="col no-space"><p className='no-space'><span>Total Cost Of Order: </span></p></div>
                            <div className="w-max-content no-space">N {calulateTotalOrderPrice(dish.price,calculateAddonsTotalPrice(dish.addons),dish.quantity)}</div>
                        </div>
                    </div>

                    <div className='py-2' />
                    <div className='row no-space'>
                        <div className='col no-space'>
                            <button className='OCI_Button BEdit font-small font-regular' onClick={onEdit}>Edit Order</button>
                        </div>
                        <div className='w-max-content no-space'>
                            <button className='OCI_Button BRemove font-small font-regular' onClick={()=>{onRemove(dish.id)}}>Remove</button>
                        </div>
                    </div>
                </div>
    );
}
export function UserOrderItem({ dish, payFn }:COIType) {
    function getAddonText (arr) {
        let res = arr.map(addon => {
            if(addon.quantity == 0){
                return ''
            }
            return (
                `${addon.quantity} ${addon.name}, `
            )
        }).join('')
        console.log({res})
        return res;
    }
    const calculateAddonsTotalPrice = (addons) => {
        return addons.reduce((total, addon) => {
            // Check if quantity is defined; otherwise default to 0
            const quantity = addon.quantity || 0;
            return total + (addon.price * quantity);
        }, 0);
    };
    const calulateTotalOrderPrice = (dishPrice:number,addonsTotal:number,totalPlates:number) => {
        return (dishPrice + addonsTotal) * totalPlates
    }
    return (
            <div className='orderCheckOutItemContainer text-main'>
            <div>
                <p className='font-subtitle font-bold no-space'>{dish.quantity} Plate{dish.quantity > 0? 's':''} Of {dish.name}</p>
            </div>
                    <div>
                        {dish.addons.length > 0 && (
                            <div>
                                <p className='font-p font-medium no-space'>Addons Incuded: </p>
                                <p className='font-small font-regular no-space'>
                                    {getAddonText(dish.addons).length == 0? 'No Addons Added' : getAddonText(dish.addons)}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className='py-1' />
                    <div>
                        <div></div>
                        <p className='font-p font-medium no-space'>Cost Summary</p>
                        
                        <div className="row no-space font-small font-regular">
                            <div className="col no-space"><p className='no-space'><span>Per Plate: </span></p></div>
                            <div className="w-max-content no-space">N {dish.price}</div>
                        </div>

                        <div className="row no-space font-small font-regular">
                            <div className="col no-space"><p className='no-space'><span>Addons Included Per Plate: </span></p></div>
                            <div className="w-max-content no-space"> N: {calculateAddonsTotalPrice(dish.addons)}</div>
                        </div>

                        <div className="row no-space font-small font-regular">
                            <div className="col no-space"><p className='no-space'><span>Total Cost Of Order: </span></p></div>
                            <div className="w-max-content no-space">N {calulateTotalOrderPrice(dish.price,calculateAddonsTotalPrice(dish.addons),dish.quantity)}</div>
                        </div>
                    </div>                  
                </div>
    );
}
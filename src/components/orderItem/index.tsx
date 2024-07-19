import React,{ useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './style.css'

interface FeaturedCardPropType {
    image?: React.JSX.Element,
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
                    {image}
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
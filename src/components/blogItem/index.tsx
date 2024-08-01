import React,{useState} from "react";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import moment from "moment";

interface FeaturedCardPropType {
    image?: string;
    title: string;
    created: string;
    actionFn?: ()=>void;
    description?: string;
    link?:string;
}

export function BlogItem ({image,link,created,title,actionFn, description=''}: FeaturedCardPropType): React.JSX.Element {
    return (
        <div className="blogItemsMain">
            <div className="blogItemContainer">
                <div className="bIContainer">
                    <img src={image} />
                </div>
                <div className='py-1'></div>
                <div>
                <div className='fc-title-container font-subtitle font-medium text-main'>
                    <p className='no-space'>{title}</p>
                </div>
                <div className='order-description'>
                    <p className='font-p no-space'>{description}</p>
                </div>
                <div className='py-1'></div>
                <div className="font-small font-medium">Posted On : {moment(created).format("MMM Do YY")}</div>
                <div className='py-1'></div>
                <div className='order-button-container'>
                    <a target="_blank" href={link}>
                        <button className='pointer'>Read Full Post <FontAwesomeIcon icon={faLocationArrow} /></button>
                    </a>
                </div>  
                </div>
            </div>
        </div>
    )
}



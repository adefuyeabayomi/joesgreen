import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './style.css'

interface HowItemPropType {
    image: React.JSX.Element,
    title: string,
    text: string
}

function HowItem({image,title,text}: HowItemPropType): React.JSX.Element {
    return (
        <div className='howItemContainer'>
            <div>{image}</div>
            <div>
                <p className=' font-subtitle font-bold  text-main'>{title}</p>
            </div>
            <div className='HITextContainer center'>
                <p className='text-main font-small'>{text}</p>
            </div>
        </div>
    )
}

export default HowItem
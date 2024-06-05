import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
 
import caretWhite from '../../assets/caret-white.png'

import './style.css'

interface HowItemPropType {
    image: React.JSX.Element,
    title: string,
    text: string,
    price: number,
    actionFn: ()=> void
}

function ConfirmOrder({image,title,text,price,actionFn}: HowItemPropType): React.JSX.Element {
    return (
        <div className='ConfirmOrderContainer'>

        </div>
    )
}

export default ConfirmOrder

import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import caretWhite from '../../assets/caret-white.png'

import './style.css'

interface HowItemPropType {
    image: React.JSX.Element,
    title: string,
    text: string,
    price: number
}

function TrainingItem({image,title,text}: HowItemPropType): React.JSX.Element {
    return (
        <div className='trainingItemContainer'>
            <div className='row no-space'>
                <div className='col-12 no-space'>
                    {image}
                </div>
                <div className='col-12 no-space'>
                    <p>{title}</p>
                    <p>DESCRIPTION: </p>
                    <p>{text}</p>
                </div>
                <button className='hiw-button-container'> 
                    <div className='w-max-content center pointer row no-space align-items-center'>
                        <div className='w-max-content no-space'><p className='font-small tipTitle'>See Our Menu</p></div>
                        <div className='w-max-content no-space'><img className='caretIcon' src={caretWhite} /></div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default TrainingItem
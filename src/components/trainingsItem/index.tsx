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

function TrainingItem({image,title,text,price,actionFn}: HowItemPropType): React.JSX.Element {
    return (
        <div className='trainingItemContainer'>
            <div className='row no-space align-items-center justify-content-center'>
                <div className='col-12 col-md-6 col-lg-7 no-space'>
                    <div className='TIImageContainer'>
                        {image}
                    </div>                    
                </div>
                <div className='col-12 col-md-6 col-lg-5 no-space'>
                    <div className='p-2 text-main'>
                        <div className='py-2 py-md-1' />
                        <p className='no-space font-subtitle font-bold'>{title}</p>
                        <div className='py-2' />
                        <p className='no-space font-regular font-p font-bold'>DESCRIPTION: </p>
                        <div className='py-1' />
                        <p className='no-space font-regular font-p'>{text}</p>
                        <div className='py-1' />
                        <div>
                            <p className='no-space font-subtitle'>N {price}</p>
                        </div>
                        <div className='py-2'></div>
                        <button onClick={actionFn} className='ti-button-container'> 
                            <div className='w-max-content center pointer row no-space align-items-center'>
                                <div className='w-max-content no-space'><p className='font-small tipTitle'>Enroll Now</p></div>
                                <div className='w-max-content no-space'><img className='caretIcon' src={caretWhite} /></div>
                            </div>
                        </button>                           
                        <div className='py-2 py-md-1' />                     
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TrainingItem
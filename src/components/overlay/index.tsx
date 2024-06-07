import React,{ useEffect, useState } from 'react'

import { useRef } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';

import './style.css'

interface OverlayPropsType {
    children : React.JSX.Element | Array<React.JSX.Element>;
    //ref: React.LegacyRef<HTMLDivElement>;
    toggle: ()=>void,
    isOpen: boolean
}

function Overlay({children,toggle,isOpen}: OverlayPropsType){
    const divRef = useRef(null)
    useEffect(()=>{
        if(isOpen){
            divRef.current.classList.add('active')
        }
        else {
            divRef.current.classList.remove('active')
        }
    },[isOpen])

    return (
        <div ref={divRef} className='jg-overlay-container'>
            <div className='jg-overlay-close-container'>
                <Hamburger toggled={true} color='#ffe3e3' size={25} toggle={toggle} />
            </div>
            {children}
        </div>
    )
}

export default Overlay
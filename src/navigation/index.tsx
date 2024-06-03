import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import pages
import Home from '../pages/home';

function Navigation(): React.JSX.Element {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' Component={Home} />
                </Routes>
            </Router>
        </>
    )
}

export default Navigation
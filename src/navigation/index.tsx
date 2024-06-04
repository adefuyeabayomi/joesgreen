import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import pages
import Home from '../pages/home';
import Header from '../components/header';

function Navigation(): React.JSX.Element {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' Component={Home} />
                </Routes>
            </Router>
        </>
    )
}

export default Navigation
import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import pages
import Home from '../pages/home';
import Header from '../components/header';
import Footer from '../components/footer';

function Navigation(): React.JSX.Element {
    return (
        <>
            <Router>
                <Header />
                <div style={{marginTop: 55}}></div>
                <Routes>
                    <Route path='/' Component={Home} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default Navigation
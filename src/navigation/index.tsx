import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import pages
import Home from '../pages/home';
import About from '../pages/about';
import TrainingEnrollment from '../pages/trainingenrollment';
import Trainings from '../pages/trainings';
import Order from '../pages/orders';
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
                    <Route path='/order' Component={Order} />
                    <Route path='/about' Component={About} />
                    <Route path='/trainings' Component={Trainings} />
                    <Route path='/training-enrollment' Component={TrainingEnrollment} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default Navigation
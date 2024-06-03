import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header
 from '../../components/header';
function Home(): React.JSX.Element {
    const navigate = useNavigate()
    function goToHome () {
        return navigate('/')
    }
    function goToOrders () {
        return navigate('/orders')
    }
    function goToTrainings () {
        return navigate('/trainings')
    }
    function goToAbout () {
        return navigate('/about')
    }
    function goToContact () {
        return navigate('/contact')
    }
    return (
        <main>
            <Header />
        <div>Homepage</div>

        </main>
    )
}

export default Home
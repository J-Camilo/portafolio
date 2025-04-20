import './home.css'
import React, { useEffect, useState } from 'react';
import AnimatedContent from './components/animateContent';
import imgLogo from '../../assets/IMG_6530.PNG'
const Home = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <div className={`fade-text ${isVisible ? 'visible' : ''}`}>
                <img src={imgLogo} alt="" srcset="" className='img' />
                <h1 >Studios</h1>
            </div>

            <AnimatedContent enableAnimation={!isVisible} />
        </>
    );
}

export default Home
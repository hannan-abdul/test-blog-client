import React from 'react';
import Footer from '../../components/Footer/Footer';
import MainBody from '../../components/MainBody/MainBody';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <MainBody/>
            <Footer/>
        </div>
    );
};

export default Home;
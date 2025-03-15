import React from 'react';
import Slider from "./components/Slider/Slider.jsx";
import Menu from "./components/Menu/Menu.jsx";
import SliderBanner from "./components/SliderBanner/SliderBanner.jsx";

const MainPage = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <SliderBanner/>
            <Menu/>
            <Slider/>
        </div>
    );
};

export default MainPage;
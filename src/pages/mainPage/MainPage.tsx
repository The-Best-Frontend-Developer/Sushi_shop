import React from 'react';
import Slider from "./components/Slider/Slider.tsx";
import Menu from "./components/Menu/Menu.tsx";
import SliderBanner from "./components/SliderBanner/SliderBanner.tsx";

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
import React from 'react';
import cl from './Middle.module.scss'
import About from "./About/About.tsx";
import Header from "./Header/Header.tsx";
import Footer from "./Footer/Footer.tsx";
import {useLocation} from "react-router-dom";

const Middle = ({children}: {children: React.ReactNode}) => {
    const location = useLocation();
    const hideAboutOn = ['/product', '/reviews', '/take-order']
    const isShowAbout = hideAboutOn.includes(location.pathname)
    const isShowFooter = location.pathname === '/take-order'
    return (
        <div className={cl.container}>
            <Header/>
            {children}
            {!isShowAbout && <About/>}
            {!isShowFooter && <Footer/>}
        </div>
    );
};

export default Middle;
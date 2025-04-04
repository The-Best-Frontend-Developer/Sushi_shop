import React from 'react';
import cl from './Middle.module.scss'
import About from "./About/About.tsx";
import Header from "./Header/Header.tsx";
import Footer from "./Footer/Footer.tsx";
import {useLocation} from "react-router-dom";

const Middle = ({children}: {children: React.ReactNode}) => {
    const location = useLocation();
    const isShowPage = location.pathname === '/product' || '/reviews'
    return (
        <div className={cl.container}>
            <Header/>
            {children}
            {!isShowPage && <About/>}
            <Footer/>
        </div>
    );
};

export default Middle;
import React from 'react';
import cl from './Middle.module.scss'
import About from "./About/About.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

const Middle = ({children, isPageTakeOrder, isPageProduct, isPageReviews}) => {
    return (
        <div className={cl.container}>
                <Header isPageTakeOrder={isPageTakeOrder}/>
                {!(isPageProduct || isPageReviews) && <About/>}
                <Footer isPageTakeOrder={isPageTakeOrder}/>
                {children}
        </div>
    );
};

export default Middle;
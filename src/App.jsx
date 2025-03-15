import React, {useContext, useEffect, useState} from 'react';
import './assets/mainStyles/global.scss'
import cl from "./App.module.css";
import './styles.scss'
import {Routes, Route, useLocation} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import RightAside from "./RightAside/RightAside";
import Navigation from "./Navigation/Navigation";
import PizzaPage from "./pages/pizzaPage/PizzaPage";
import Middle from "./Middle/Middle";
import {ProductContext} from "./Context.jsx";

const lightTheme = {
    '--orange': '#FF9846',
    '--redOrange': '#F46D40',
    '--red': '#EB5757',
    '--darkColor': '#111111',
    '--white': '#FFF',
    '--light-grey': '#F2F2F2',
    '--grey': '#A4ACAD',
    '--body': 'white',

    '--border-radius': '0.3rem',

    '--font': 'DinPro, sans-serif',
    '--fontColor': 'black',

    '--transition': '0.25s',
}

const darkTheme = {
    '--orange': '#FF7B2E',       // Более глубокий оранжевый
    '--redOrange': '#D9532A',   // Затемнённый красно-оранжевый
    '--red': '#C92B2B',         // Более тёмный красный
    '--darkColor': 'white',   // Основной фон — глубокий чёрный
    '--white': '#E5E5E5',       // Светло-серый вместо белого
    '--light-grey': '#3A3A3A',  // Тёмный вариант светло-серого
    '--grey': '#bbb',        // Затемнённый серый
    '--body': '#1E1E1E',        // Цвет фона страницы

    '--border-radius': '0.3rem',

    '--font': 'DinPro, sans-serif',
    '--fontColor': '#EAEAEA',   // Светлый цвет шрифта для контраста

    '--transition': '0.25s',
};

function App() {
    const contextValues = useContext(ProductContext)
    const location = useLocation()
    const isPageTakeOrder = location.pathname.includes('/take-order')
    const isPageReviews = location.pathname.includes('/reviews')
    const isPageProduct = location.pathname.includes('/product')
    const [isDark, setIsDark] = useState(false);
    const [name, setName] = useState('ывапролдлорпавап')
    const [amount, setAmount] = useState('2')
    const [price, setPrice] = useState('100')
    const [id, setId] = useState('1')

    useEffect(() => {
        const theme = isDark ? darkTheme : lightTheme;
        Object.entries(theme).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });
    }, [isDark]);

    return (
        <div className={cl.container}>
            <input className={cl.checkbox} type="checkbox" onChange={() => setIsDark(!isDark)}/>
            <form className={cl.absolute}>
                <input type="text" value={name} placeholder='Название' onChange={(e) => setName(e.target.value)}/>
                <input type="text" value={amount} placeholder='Кол-во' onChange={(e) => setAmount(e.target.value)}/>
                <input type="text" value={price} placeholder='Цена' onChange={(e) => setPrice(e.target.value)}/>
                <input type="text" value={id} placeholder='ID' onChange={(e) => setId(e.target.value)}/>
                <button className={cl.add}
                        onClick={(event) => {
                            event.preventDefault();
                            contextValues.addProduct(id, '/public/logo.png', name, Number(amount), price);
                            setId('')
                            setName('')
                            setAmount('')
                            setPrice('')
                        }}
                >
                    Добавить
                </button>
            </form>

            {!isPageTakeOrder && <Navigation/>}
            <Middle isPageTakeOrder={isPageTakeOrder} isPageReviews={isPageReviews} isPageProduct={isPageProduct}>
                <Routes>
                    <Route path="/" element={<MainPage/>} exact/>
                    <Route path="/pizza" element={<PizzaPage/>}/>
                </Routes>
            </Middle>
            <RightAside/>
        </div>
    );
}

export default App;

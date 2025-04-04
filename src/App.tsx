import React, {useEffect, useState} from 'react';
import './assets/mainStyles/global.scss'
import cl from "./App.module.css";
import './styles.scss'
import {Routes, Route, useLocation} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage.tsx";
import RightAside from "./RightAside/RightAside.tsx";
import Navigation from "./Navigation/Navigation.tsx";
import PizzaPage from "./pages/pizzaPage/PizzaPage.tsx";
import Middle from "./Middle/Middle.tsx";
import {useAppDispatch} from "./store/myHook.ts";
import {addProduct} from "./store/reducers/cartProductsReducer.ts";

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
    const dispatch = useAppDispatch();
    const location = useLocation();
    const [isDark, setIsDark] = useState(false);
    const [name, setName] = useState('ывапролдлорпавап')
    const [amount, setAmount] = useState<string | null>('2')
    const [price, setPrice] = useState<string | null>('100')
    const [id, setId] = useState<string | null>('1')

    useEffect(() => {
        const theme = isDark ? darkTheme : lightTheme;
        Object.entries(theme).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });
    }, [isDark]);

    function handleChange(el: string | null) {
        return el ? el : ''
    }

    return (
        <div className={cl.container}>
            <input className={cl.checkbox} type="checkbox" onChange={() => setIsDark(!isDark)}/>
            <form className={cl.absolute}>
                <input type="text" value={name} placeholder='Название' onChange={(e) => setName(e.target.value)}/>
                <input type="text" value={handleChange(amount)} placeholder='Кол-во' onChange={() => setAmount(handleChange(amount))}/>
                <input type="text" value={handleChange(price)} placeholder='Цена' onChange={() => setPrice(handleChange(price))}/>
                <input type="text" value={handleChange(id)} placeholder='ID' onChange={() => setId(handleChange(id))}/>
                <button className={cl.add}
                        onClick={(event) => {
                            event.preventDefault();
                            dispatch(addProduct({
                                id: Number(id),
                                img: '/public/logo.png',
                                name,
                                amount: Number(amount),
                                price: Number(price)
                            }));
                            setId(null)
                            setName('')
                            setAmount(null)
                            setPrice(null)
                        }}
                >
                    Добавить
                </button>
            </form>

            {!(location.pathname === '/take-order') && <Navigation/>}
            <Middle>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/pizza" element={<PizzaPage/>}/>
                </Routes>
            </Middle>
            <RightAside/>
        </div>
    );
}

export default App;

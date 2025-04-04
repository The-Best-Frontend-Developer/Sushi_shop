import React, {useEffect, useState} from 'react';
import cl from './RightAside.module.scss'
import EmptyCart from "./Cart/EmptyCart/EmptyCart.js";
import FullCart from "./Cart/FullCart/FullCart.js";
import {useAppSelector} from "../store/myHook.js";

const RightAside = () => {
    const state = useAppSelector(state => state.cart)
    const [isProducts, setIsProducts] = useState(false)

    useEffect(() => {
        setIsProducts(state.length !== 0);
    }, [state]);

    return (
        <div className={cl.cart}>
            {isProducts
                ? <FullCart/>
                : <EmptyCart/>
            }
        </div>
    );
};

export default RightAside;
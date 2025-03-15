import React, {useContext, useEffect, useState} from 'react';
import cl from './RightAside.module.scss'
import EmptyCart from "./Cart/EmptyCart/EmptyCart";
import FullCart from "./Cart/FullCart/FullCart";
import {ProductContext} from "../Context.jsx";

const RightAside = () => {
    const contextValues = useContext(ProductContext)
    const [isProducts, setIsProducts] = useState(false)

    useEffect(() => {
        setIsProducts(contextValues.products.length !== 0);
    }, [contextValues.products]);

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
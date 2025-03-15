import React, {useContext, useMemo, useState} from 'react';
import cl from './FullCart.module.scss'
import CartItems from "./CartItems/CartItems";
import {Link} from "react-router-dom";
import {ProductContext} from "../../../Context";

const FullCart = () => {
    const contextValues = useContext(ProductContext)

    const calcPrice = useMemo(() => {
        return contextValues.products.reduce((acc, el) => Number(acc) + Number(el.price) * Number(el.amount), 0)
    }, [contextValues.products])

    return (
        <div className={cl.fullCart}>
            <div className={cl.topText}>
                <h3 className={cl.h3}>Корзина</h3>
            </div>
            <div className={cl.cartItems}>
                {contextValues.products.map((el) =>
                <CartItems key={el.id} product={el}/>
            )}
            </div>
            <div className={cl.orderActions}>
                <div className={cl.priceContainer}>
                    <p className={cl.price} title={calcPrice + ' руб'}>
                        {calcPrice}
                        &nbsp;руб
                    </p>
                </div>
                <Link className={cl.order} to="/take-order">Оформить заказ</Link>
            </div>
        </div>
    );
};

export default FullCart;
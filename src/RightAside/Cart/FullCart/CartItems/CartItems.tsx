import React from 'react';
import cl from './CartItems.module.scss';
import {useAppDispatch} from "../../../../store/myHook.js";
import {removeProduct, updateAmount} from "../../../../store/reducers/cartProductsReducer.js";

type CartItem = {
    id: number,
    img: string,
    name: string,
    amount: number,
    price: number
};

type Props = {
    product: CartItem,
};

const CartItems = ({product}: Props) => {
    const dispatch = useAppDispatch();

    const name = product.name
    let shortName;

    if (name.length > 16) {
        shortName = name.slice(0, 16) + '...'
    } else {
        shortName = name
    }

    function sum() {dispatch(updateAmount({id: product.id, newAmount: Number(product.amount + 1)}))}
    function min() {dispatch(updateAmount({id: product.id, newAmount: Number(product.amount - 1)}))}

    return (
        <div className={cl.cartItems}>
            <div
                className={cl.image}
                style={{
                    backgroundImage: `url(${product.img})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            <div className={cl.info}>
                <h3 className={[cl.product, 'reg', 'mid', 'black'].join(' ')} title={name}>{shortName}</h3>
                <div className={cl.amountPriceContainer}>
                    <div className={cl.amountGroup}>
                        <button className={cl.decreasement} onClick={min} disabled={product.amount <= 1}>
                            <svg className={cl.minus} width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L11 1" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                        <span className='bold mid black'>{product.amount}</span>
                        <button className={cl.increment} onClick={sum} disabled={product.amount >= 10}>
                            <svg className={cl.plus} width="13" height="14" viewBox="0 0 13 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.36035 1.95679V12.0791" stroke="#F2F2F2" strokeWidth="2"
                                      strokeLinecap="round"/>
                                <path d="M1.54004 6.77698L11.6623 6.77698" stroke="#F2F2F2" strokeWidth="2"
                                      strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className={['price', 'mid'].join(' ')}>{product.price * product.amount}&nbsp;руб</div>
                </div>
            </div>

            <button className={cl.delete} onClick={() => dispatch(removeProduct({id: product.id}))}>
                <svg className={cl.delete} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.15771 1.00012L1.0002 8.1577" stroke="#A4ACAD" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M1.34082 1L8.49834 8.15758" stroke="#A4ACAD" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
        </div>
    );
};

export default CartItems;
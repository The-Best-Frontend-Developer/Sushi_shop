import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Product = {
    id: number;
    img: string;
    name: string;
    amount: number;
    price: number;
}

const initialState: Product[] = []

const cartProductsReducer = createSlice({
    name: 'cartProducts',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<{id: number, img: string, name: string, amount: number, price: number}>) => {
            const { id, img, name, amount, price } = action.payload;
            state.push({ id, img, name, amount, price });
        },
        removeProduct: (state, action: PayloadAction<{id: number}>) => {
            return state.filter((el) => el.id !== action.payload.id)
        },
        updateAmount: (state, action: PayloadAction<{id: number, newAmount: number}>) => {
            const {id, newAmount} = action.payload;
            state.map((el) => el.id === id ? { ...el, amount: newAmount } : el)
        }
    }
})

export const {addProduct, removeProduct, updateAmount} = cartProductsReducer.actions

export default cartProductsReducer.reducer
import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.scss'
import App from './App.js';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store.js";

const rootElement = document.getElementById('root');

if (rootElement) {
    createRoot(rootElement).render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
}
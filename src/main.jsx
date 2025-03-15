import { createRoot } from 'react-dom/client'
import './styles.scss'
import App from './App.jsx'
import {ProductProvider} from "./Context.jsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ProductProvider>
            <App />
        </ProductProvider>
    </BrowserRouter>
)

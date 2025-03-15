import { createContext, useState } from "react";

const ProductContext = createContext();
export { ProductContext }

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);

    const addProduct = (id, img, name, amount, price) => {
        setProducts([...products, { id, img, name, amount, price }]);
    };

    const removeProduct = (id) => {
        setProducts((prev) => prev.filter((product) => product.id !== id));
    };

    const updateAmount = (id, newAmount) => {
        setProducts(prev =>
            prev.map(p => (p.id === id ? { ...p, amount: newAmount } : p))
        );
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, removeProduct, updateAmount }}>
            {children}
        </ProductContext.Provider>
    );
}


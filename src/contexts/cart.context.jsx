import {createContext, useEffect, useState} from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: () => {
    },
    cardItems: [],
    itemsInCart: 0,
    addCardItem: () => {
    },
    removeItems: () => {
    },
    removeItem: () => {
    },
    totalCost: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setCartOpen] = useState(false);
    const [cardItems, setCartItems] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        let count = 0;
        cardItems.forEach((i) => {
            count += i?.quantity;
        });
        setItemsInCart(count);
    }, [cardItems]);

    useEffect(() => {
        let price = 0;
        cardItems.forEach((i) => {
            price += i.quantity * i.price;
        });
        setTotalCost(price);
    }, [cardItems]);

    const addCardItem = (productToAdd) => {
        const product = cardItems.find(i => i.id === productToAdd.id);
        if (product) {
            product.quantity++;
            setCartItems([...cardItems]);
        } else {
            cardItems.push({...productToAdd, quantity: 1});
            setCartItems([...cardItems]);
        }
    }
    const removeItems = (productToRemove) => {
        const product = cardItems.find(i => i.id === productToRemove.id);
        product.quantity--;
        if (product.quantity === 0) {
            cardItems.splice(cardItems.findIndex(i => i.id === productToRemove.id), 1);
        }
        setCartItems([...cardItems]);
    }

    const removeItem = (productToRemove) => {
        cardItems.splice(cardItems.findIndex(i => i.id === productToRemove.id), 1);
        setCartItems([...cardItems]);
    }
    const value = {isCartOpen, setCartOpen, addCardItem, removeItems, removeItem, cardItems, itemsInCart, totalCost};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

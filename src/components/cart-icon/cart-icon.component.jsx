import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {CartContext} from "../../contexts/cart.context";
import {useContext} from "react";


const CartIconComponent = () => {
    const {isCartOpen, setCartOpen} = useContext(CartContext);

    const openCart = () => {
        setCartOpen(!isCartOpen);
    };

    return (
        <div className='cart-icon-container' onClick={openCart}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIconComponent;

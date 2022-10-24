import './checkout-item.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

export const CheckoutItemComponent = ({cartItem}) => {
    const {removeItem, removeItems, addCardItem} = useContext(CartContext);
    const {name, price, quantity} = cartItem;
    return (
        <div className='checkout-item-container'>
            <div className='item-container'>
                <img src={cartItem.imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='arrow' onClick={() => removeItems(cartItem)}>&#10094;</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={ () => addCardItem(cartItem)}>&#10095;</span>
              </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    );
}

export default CheckoutItemComponent;

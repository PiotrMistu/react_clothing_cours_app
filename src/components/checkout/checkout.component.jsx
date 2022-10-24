import './checkout.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CheckoutItemComponent from "../checkout-item/checkout-item.component";

export const CheckoutComponent = () => {
    const {cardItems, totalCost} = useContext(CartContext);

    return (
        <div>
            <div className='checkout-container'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>
                {cardItems.map(item => {
                    return (<CheckoutItemComponent key={item.id} cartItem={item}></CheckoutItemComponent>);
                })}
                <span className='total'>Total: ${totalCost}</span>
            </div>
        </div>
    );
}

export default CheckoutComponent;

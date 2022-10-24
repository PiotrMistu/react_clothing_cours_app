import './cart-dropdown.styles.scss';
import ButtonComponent from "../button/button.component";
import CartItemComponent from "../card-item/cart-item.component";
import {useNavigate} from "react-router-dom";

const CardDropdownComponent = ({params}) => {
    const navigation = useNavigate();
    const goToCheckout = () => {
        navigation('/checkout');
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {params.map(item => <CartItemComponent key={item.name}
                                                       cartItem={item}></CartItemComponent>)}
            </div>
            <ButtonComponent onClick={goToCheckout}>Go to Checkout</ButtonComponent>
        </div>
    );
}

export default CardDropdownComponent;

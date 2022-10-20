import './cart-dropdown.styles.scss';
import ButtonComponent from "../button/button.component";

const CardDropdownComponent = (params) => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'></div>
            <ButtonComponent>Go to Checkout</ButtonComponent>
        </div>
    );
}

export default CardDropdownComponent;

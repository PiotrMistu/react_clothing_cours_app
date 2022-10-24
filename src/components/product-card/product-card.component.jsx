import './product-card.styles.scss';
import Button from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

export const ProductCardComponent = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addCardItem} = useContext(CartContext);

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={() => addCardItem(product)}>Add to card</Button>
        </div>
    );
}

export default ProductCardComponent;

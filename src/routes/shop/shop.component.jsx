import {ProductContext} from "../../contexts/product.context";
import {useContext} from "react";
import ProductCardComponent from "../../components/product-card/product-card.component";
import './shop.styles.scss';

const Shop = () => {
    const {products} = useContext(ProductContext);
    return (
        <div className='product-container'>
            {products.map((product) => (
                <ProductCardComponent key={product.id} product={product}></ProductCardComponent>
            ))}
        </div>
    );
}

export default Shop;

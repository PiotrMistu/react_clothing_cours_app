import './category-preview.styles.scss';
import ProductCardComponent from "../product-card/product-card.component";
import {useNavigate} from "react-router-dom";

const CategoryPreviewComponent = ({title, products}) => {
    let navigate = useNavigate();

    const navigateRout = () => {
        navigate(`${title}`);
    }
    return (
        <div className='category-preview-container'>
            <h2>
                <span onClick={navigateRout} className='title'>{title.toUpperCase()}</span>
            </h2>
            <div className='preview'>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCardComponent key={product.id} product={product}/>
                    ))}
            </div>
        </div>
    );
}

export default CategoryPreviewComponent;

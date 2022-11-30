import {Fragment, useContext} from "react";
import './categories-preview.styles.scss';
import {CategoriesContext} from "../../contexts/category.context";
import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreviewComponent key={title} title={title} products={products} />
                );
            })}
        </Fragment>
    );
};

export default CategoriesPreview;

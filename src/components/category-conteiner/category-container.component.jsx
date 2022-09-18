import './category-containers.style.scss';
import CategoryComponent from "../category/category.component";

const CategoryContainerComponent = () => {

    const categories = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            "id": 4,
            "title": "womens",
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
            "id": 5,
            "title": "mens",
            "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
    ];

    return (
        <div className='categories-container'>
            {categories.map((categories) => {
                return (
                    <CategoryComponent
                        category={categories}
                    ></CategoryComponent>
                );
            })}
        </div>
    );
}

export default CategoryContainerComponent;

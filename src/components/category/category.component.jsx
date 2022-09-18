import './category.styles.scss';

const CategoryComponent = ({category}) => {

    const {title, imageUrl, id} = category;
    console.log(category, id, title);
    return (
        <div className='category-container'>
            <img className='background-image'
                 style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default CategoryComponent;

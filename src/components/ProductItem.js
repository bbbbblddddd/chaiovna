
const ProductItem = ({product, onItemClick}) => {

    const handleClick = (event) => {
        onItemClick(product)
    }

    return (
        <li> {product.name}, £{product.price}
        <img src= {product.image} width= "80px" alt= {product.name}/>
        <button onClick={handleClick}>Add to Basket</button>
        </li>
    )
}

export default ProductItem;
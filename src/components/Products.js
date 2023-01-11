import ProductItem from "./ProductItem"

const Products = ({ TeaProducts, onItemClick }) => {

    const ProductNodes = TeaProducts.map((product, index ) => {
        return <ProductItem product={product} key= {index} onItemClick= {onItemClick} />
    })


    return (

        <ul>
            {ProductNodes}
        </ul>

    )

}

export default Products;

